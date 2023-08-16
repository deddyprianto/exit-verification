import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDataScanner,
  setIsLoading,
  setIsErrorScan,
  setValueScanner,
} from '@/feature/saveDataSlice';
import useScanDetection from 'use-scan-detection';
import { useRouter } from 'next/navigation';
import { setRefNo } from '@/feature/saveDataPersisted';

export default function Scanner() {
  const route = useRouter();
  const dispatch = useDispatch();
  const valueScnanner = useSelector((state) => state.dataUser.valueScnanner);
  useScanDetection({
    onComplete: (code) => {
      dispatch(setValueScanner(code));
    },
    minLength: 13,
  });

  useEffect(() => {
    const handleScanner = async () => {
      try {
        dispatch(setIsLoading(true));
        const res = await axios.get(
          `https://api-fareastflora.proseller-demo.com/integration/api/v1/transactions/byTransactionRefNo/${valueScnanner}`,
          {
            headers: {
              'User-Agent': 'Apidog/1.0.0 (https://apidog.com)',
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJ0eXBlIjoiaWRlbnRpdHlQb29sIiwiY29tcGFueUlkIjoiY29tcGFueTo6YjA1NTQ0ODgtMTI3MS00YjI5LTgwYjAtZTM5ZjllZTFjNjVlIiwiY29tcGFueU5hbWUiOiJmYXJlYXN0ZmxvcmEiLCJkb21haW5OYW1lIjoiYXBpLWZhcmVhc3RmbG9yYS5wcm9zZWxsZXItZGVtby5jb20ifQ.sldfM1vhkryUfL3yV_FZYF16R0trmz250U4r6UW7Gbs',
              'Content-Type': 'application/json',
            },
          }
        );
        dispatch(setDataScanner(res.data.data));
        dispatch(setIsLoading(false));
        dispatch(setRefNo(valueScnanner));
        route.push('/thankyoupage');
      } catch (error) {
        dispatch(setIsErrorScan(true));
        console.log('err', error);
      }
    };

    if (valueScnanner) {
      handleScanner();
    }
  }, [valueScnanner]);

  return (
    <div className='h-[350px] bg-white'>
      <div className='text-center text-3xl mt-[10px]'>{valueScnanner}</div>
    </div>
  );
}

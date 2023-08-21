import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setDataScanner,
  setIsLoading,
  setIsErrorScan,
} from '@/feature/saveDataSlice';
import { useRouter } from 'next/navigation';
import { setRefNo } from '@/feature/saveDataPersisted';
import { debounce } from 'lodash';

export default function Scanner() {
  const [isScannDetected, setIsScannDetected] = useState(true);
  const [valueScanner, setValueScanner] = useState('');
  const route = useRouter();
  const dispatch = useDispatch();

  const handleScannerValueDetected = async (scannerValue) => {
    if (scannerValue) {
      try {
        dispatch(setIsLoading(true));
        const res = await axios.get(
          `https://api-fareastflora.proseller-demo.com/integration/api/v1/transactions/byTransactionRefNo/${scannerValue}`,
          {
            headers: {
              'User-Agent': 'Apidog/1.0.0 (https://apidog.com)',
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJ0eXBlIjoiaWRlbnRpdHlQb29sIiwiY29tcGFueUlkIjoiY29tcGFueTo6YjA1NTQ0ODgtMTI3MS00YjI5LTgwYjAtZTM5ZjllZTFjNjVlIiwiY29tcGFueU5hbWUiOiJmYXJlYXN0ZmxvcmEiLCJkb21haW5OYW1lIjoiYXBpLWZhcmVhc3RmbG9yYS5wcm9zZWxsZXItZGVtby5jb20ifQ.sldfM1vhkryUfL3yV_FZYF16R0trmz250U4r6UW7Gbs',
              'Content-Type': 'application/json',
            },
          }
        );
        setIsScannDetected(true);
        dispatch(setDataScanner(res.data.data));
        dispatch(setIsLoading(false));
        dispatch(setRefNo(scannerValue));
        route.push('/thankyoupage');
      } catch (error) {
        dispatch(setIsErrorScan(true));
        console.log('err', error);
      }
    }
  };

  const debounceHandleScannerValueDetected = debounce(
    handleScannerValueDetected,
    1000
  );

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValueScanner(newValue);
    debounceHandleScannerValueDetected(newValue);
  };

  return (
    <div className='h-[350px] bg-white'>
      <input
        value={valueScanner}
        onChange={handleInputChange}
        autoFocus
        className={`w-full p-[16px] text-center text-2xl text-white ${
          !isScannDetected && 'outline-none hidden'
        }`}
      />
    </div>
  );
}

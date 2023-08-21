import { useRef, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setDataScanner,
  setIsLoading,
  setIsErrorScan,
} from '@/feature/saveDataSlice';
import { useRouter } from 'next/navigation';
import { setRefNo } from '@/feature/saveDataPersisted';

export default function Scanner({ hiddenField }) {
  const inputRef = useRef(null);
  const route = useRouter();
  const dispatch = useDispatch();

  const handleAnyElementClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleAnyElementClick);
    // clean up
    return () => {
      document.removeEventListener('click', handleAnyElementClick);
    };
  }, []);

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const scannerValue = event.target.value;
      try {
        dispatch(setIsLoading(true));
        const res = await axios.get(
          `https://api-fareastflora.proseller-demo.com/integration/api/v1/transactions/byTransactionRefNo/${scannerValue}`,
          {
            headers: {
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJ0eXBlIjoiaWRlbnRpdHlQb29sIiwiY29tcGFueUlkIjoiY29tcGFueTo6YjA1NTQ0ODgtMTI3MS00YjI5LTgwYjAtZTM5ZjllZTFjNjVlIiwiY29tcGFueU5hbWUiOiJmYXJlYXN0ZmxvcmEiLCJkb21haW5OYW1lIjoiYXBpLWZhcmVhc3RmbG9yYS5wcm9zZWxsZXItZGVtby5jb20ifQ.sldfM1vhkryUfL3yV_FZYF16R0trmz250U4r6UW7Gbs',
              'Content-Type': 'application/json',
            },
          }
        );
        dispatch(setDataScanner(res.data.data));
        dispatch(setIsLoading(false));
        dispatch(setRefNo(scannerValue));
        inputRef.current.value = '';
        route.push('/thankyoupage');
      } catch (error) {
        inputRef.current.value = '';
        dispatch(setIsErrorScan(true));
        console.log(error);
      }
    }
  };

  return (
    <div className='h-[350px] bg-white'>
      <input
        ref={inputRef}
        onKeyDown={handleKeyPress}
        autoFocus
        className={`w-full p-[16px] text-center text-2xl ${
          hiddenField === 'true' && 'text-transparent outline-none'
        }`}
      />
    </div>
  );
}

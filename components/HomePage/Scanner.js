import { useRef, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setDataScanner,
  setIsLoading,
  setIsErrorScan,
  setIsVerify,
  setIsTransactionIsInvalid,
} from '@/feature/saveDataSlice';
import { useRouter } from 'next/navigation';
import { setRefNo } from '@/feature/saveDataPersisted';
import middleImage from '@/assets/img/middleImage.png';

export default function Scanner({ baseURL, token }) {
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
          `${baseURL}/integration/api/v1/transactions/byTransactionRefNo/${scannerValue}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        dispatch(setDataScanner(res.data.data));
        dispatch(setIsLoading(false));
        dispatch(setRefNo(scannerValue));
        inputRef.current.value = '';

        if (
          res?.data?.data?.isVerified &&
          res?.data?.data?.orderingMode === 'STORECHECKOUT' &&
          res?.data?.data?.status === 'COMPLETED'
        ) {
          return dispatch(setIsVerify(true));
        }
        if (
          res?.data?.data?.orderingMode === 'STORECHECKOUT' &&
          res?.data?.data?.status !== 'COMPLETED'
        ) {
          return dispatch(setIsTransactionIsInvalid(true));
        }

        if (res?.data?.data?.orderingMode !== 'STORECHECKOUT') {
          return dispatch(setIsTransactionIsInvalid(true));
        }

        route.push('/thankyoupage');
      } catch (error) {
        inputRef.current.value = '';
        dispatch(setIsErrorScan(true));
        console.log(error);
      }
    }
  };

  return (
    <div
      className='h-[350px] lg:h-[666px]'
      style={{
        backgroundImage: `url(${middleImage.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <input
        ref={inputRef}
        onKeyDown={handleKeyPress}
        autoFocus
        className='w-full p-[16px] text-center text-2xl text-transparent outline-none bg-transparent'
      />
    </div>
  );
}

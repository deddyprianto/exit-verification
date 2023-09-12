'use client';
import { useEffect } from 'react';
import { LoadingPopup } from '../Modal/LoadingPopup';
import { ErrorMessage } from '../Modal/MessageScanner';
import Header from './Header';
import MainCP from './Main';
import { useSelector, useDispatch } from 'react-redux';
import { PopUpIsVerified } from '../Modal/PopUpIsVerified';
import { PopUpInvalidTransaction } from '../Modal/PopUpInvalidTransaction';
import { setBagItem } from '@/feature/saveDataSlice';

export default function HomePage({ outletAddress, baseURL, token }) {
  // const myBoolDebug = debug === 'true';
  const dispatch = useDispatch();
  const isErrorScan = useSelector((state) => state.dataUser.isErrorScan);
  const isLoading = useSelector((state) => state.dataUser.isLoading);
  const isRefreshPage = useSelector((state) => state.dataUser.isRefreshPage);
  const isVerify = useSelector((state) => state.dataUser.isVerify);
  const isTransactionIsInvalid = useSelector(
    (state) => state.dataUser.isTransactionIsInvalid
  );

  useEffect(() => {
    if (isRefreshPage) {
      window.location.reload();
    }
  }, [isRefreshPage]);

  useEffect(() => {
    dispatch(setBagItem([]));
  }, []);

  return (
    <div>
      <Header outletAddress={outletAddress} />
      <MainCP baseURL={baseURL} token={token} />
      <ErrorMessage isErrorScan={isErrorScan} />
      <LoadingPopup isLoading={isLoading} />
      <PopUpIsVerified isVerify={isVerify} />
      <PopUpInvalidTransaction
        isTransactionIsInvalid={isTransactionIsInvalid}
      />
    </div>
  );
}

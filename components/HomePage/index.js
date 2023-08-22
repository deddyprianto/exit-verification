'use client';
import { useEffect } from 'react';
import { LoadingPopup } from '../Modal/LoadingPopup';
import { ErrorMessage } from '../Modal/MessageScanner';
import Header from './Header';
import MainCP from './Main';
import { useSelector } from 'react-redux';

export default function HomePage({
  outletAddress,
  hiddenField,
  baseURL,
  token,
}) {
  const isErrorScan = useSelector((state) => state.dataUser.isErrorScan);
  const isLoading = useSelector((state) => state.dataUser.isLoading);
  const isRefreshPage = useSelector((state) => state.dataUser.isRefreshPage);

  useEffect(() => {
    if (isRefreshPage) {
      window.location.reload();
    }
  }, [isRefreshPage]);

  return (
    <div>
      <Header outletAddress={outletAddress} />
      <MainCP hiddenField={hiddenField} baseURL={baseURL} token={token} />
      <ErrorMessage isErrorScan={isErrorScan} />
      <LoadingPopup isLoading={isLoading} />
    </div>
  );
}

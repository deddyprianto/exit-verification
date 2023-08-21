'use client';
import { LoadingPopup } from '../Modal/LoadingPopup';
import { ErrorMessage } from '../Modal/MessageScanner';
import Header from './Header';
import MainCP from './Main';
import { useSelector } from 'react-redux';

export default function HomePage({ outletAddress }) {
  const isErrorScan = useSelector((state) => state.dataUser.isErrorScan);
  const isLoading = useSelector((state) => state.dataUser.isLoading);
  return (
    <div>
      <Header outletAddress={outletAddress} />
      <MainCP />
      <ErrorMessage isErrorScan={isErrorScan} />
      <LoadingPopup isLoading={isLoading} />
    </div>
  );
}

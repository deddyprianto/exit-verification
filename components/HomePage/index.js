'use client';
import { ErrorMessage } from '../Modal/ErrorMessage';
import Header from './Header';
import MainCP from './Main';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const isValidQrCode = useSelector(
    (state) => state.saveDataSlice.isValidQrCode
  );
  return (
    <div>
      <Header />
      <MainCP />
      <ErrorMessage isValidQrCode={isValidQrCode} />
    </div>
  );
}

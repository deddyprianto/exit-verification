'use client';
import Header from '@/components/Thankyou/Header';
import ItemList from './ItemList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setDataScanner, setIsLoading } from '@/feature/saveDataSlice';
import axios from 'axios';
import { LoadingPopup } from '../Modal/LoadingPopup';
import Footer from './Footer';

export default function Thankyou({ baseURL, token }) {
  const dispatch = useDispatch();
  const refNo = useSelector((state) => state.dataPersist.refNo);
  const isLoading = useSelector((state) => state.dataUser.isLoading);

  useEffect(() => {
    const handleScanner = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/integration/api/v1/transactions/byTransactionRefNo/${refNo}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        dispatch(setDataScanner(res.data.data));
        dispatch(setIsLoading(false));
      } catch (error) {
        console.log('err', error);
      }
    };
    handleScanner();
  }, []);

  return (
    <div className='relative h-screen'>
      <Header />
      <ItemList />
      <Footer baseURL={baseURL} token={token} />
      <LoadingPopup isLoading={isLoading} />
    </div>
  );
}

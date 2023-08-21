'use client';
import Header from '@/components/Thankyou/Header';
import ItemList from './ItemList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setDataScanner, setIsLoading } from '@/feature/saveDataSlice';
import axios from 'axios';
import { LoadingPopup } from '../Modal/LoadingPopup';
import Footer from './Footer';

export default function Thankyou() {
  const dispatch = useDispatch();
  const refNo = useSelector((state) => state.dataPersist.refNo);
  const isLoading = useSelector((state) => state.dataUser.isLoading);

  useEffect(() => {
    const handleScanner = async () => {
      try {
        const res = await axios.get(
          `https://api-fareastflora.proseller-demo.com/integration/api/v1/transactions/byTransactionRefNo/${refNo}`,
          {
            headers: {
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJ0eXBlIjoiaWRlbnRpdHlQb29sIiwiY29tcGFueUlkIjoiY29tcGFueTo6YjA1NTQ0ODgtMTI3MS00YjI5LTgwYjAtZTM5ZjllZTFjNjVlIiwiY29tcGFueU5hbWUiOiJmYXJlYXN0ZmxvcmEiLCJkb21haW5OYW1lIjoiYXBpLWZhcmVhc3RmbG9yYS5wcm9zZWxsZXItZGVtby5jb20ifQ.sldfM1vhkryUfL3yV_FZYF16R0trmz250U4r6UW7Gbs',
              'Content-Type': 'application/json',
              'User-Agent': 'Apidog/1.0.0 (https://apidog.com)',
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
      {/* <Footer /> */}
      <LoadingPopup isLoading={isLoading} />
    </div>
  );
}

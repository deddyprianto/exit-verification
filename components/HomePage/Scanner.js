import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setData,
  setIsLoading,
  setIsValidQrCode,
} from '@/feature/saveDataSlice';

export default function Scanner() {
  const dispatch = useDispatch();
  const [stopStream, setStopStream] = useState(false);
  const handleScanner = async (data) => {
    try {
      dispatch(setIsLoading(true));
      const res = await axios.get(
        `https://api-fareastflora.proseller-demo.com/integration/api/v1/transactions/byTransactionRefNo/${data}`,
        {
          headers: {
            'User-Agent': 'Apidog/1.0.0 (https://apidog.com)',
          },
        }
      );
      dispatch(setData(res.data));
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <BarcodeScannerComponent
        width={720}
        height={350}
        stopStream={stopStream}
        onUpdate={(err, result) => {
          if (result) {
            setStopStream(true);
            console.log('success ded', result);
          } else {
            console.log('err dedd', err);
          }
        }}
      />
    </>
  );
}

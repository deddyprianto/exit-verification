import { setIsLoading, setVerifyItems } from '@/feature/saveDataSlice';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { PopUpVerifyItemCountDown } from '../Modal/PopUpVerifyItemCountDown';

export default function Footer({ baseURL, token }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataUser.dataScan);
  const payload = { customerId: data?.customer?.id };
  const handleVerifyItems = async () => {
    try {
      dispatch(setIsLoading(true));
      const res = await axios.post(
        `${baseURL}/crm/api/sales/${data?.id}/verify`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch(
        setVerifyItems({ showPopup: true, data: res.data, isError: false })
      );
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(
        setVerifyItems({
          showPopup: true,
          data: error.response.data,
          isError: true,
        })
      );
      dispatch(setIsLoading(false));
      console.log(error);
    }
  };
  return (
    <div className='p-[24px] absolute bottom-0 w-full h-[134px] lg:h-[244px]'>
      <div className='flex justify-between items-center text-[16px] font-bold bg-[#F9F9F9] h-[40px] p-[8px] lg:h-[102px] lg:p-[24px] lg:text-[36px]'>
        <div>Total Quantity</div>
        <div>{data?.details?.length} items</div>
      </div>
      <div
        onClick={handleVerifyItems}
        className='flex justify-center items-center bg-[#003F24] p-[8px] text-white text-[24px] font-medium  w-full lg:mt-[24px] lg:h-[70px] lg:text-[36px]'
      >
        <div>VERIFY ITEMS</div>
      </div>
      <PopUpVerifyItemCountDown />
    </div>
  );
}

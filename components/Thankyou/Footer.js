import { useSelector } from 'react-redux';

export default function Footer() {
  const data = useSelector((state) => state.dataUser.dataScan);
  return (
    <div className='p-[24px] absolute bottom-0 w-full h-[134px] lg:h-[244px]'>
      <div className='flex justify-between items-center text-[16px] font-bold bg-[#F9F9F9] h-[40px] p-[8px] lg:h-[102px] lg:p-[24px] lg:text-[36px]'>
        <div>Total Quantity</div>
        <div>{data?.details?.length} items</div>
      </div>
      <div className='flex justify-center items-center bg-[#003F24] p-[8px] text-white text-[24px] font-medium  w-full lg:mt-[24px] lg:h-[70px] lg:text-[36px]'>
        <div>VERIFY ITEMS</div>
      </div>
    </div>
  );
}

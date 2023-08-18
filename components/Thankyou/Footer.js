import { useSelector } from 'react-redux';

export default function Footer() {
  const data = useSelector((state) => state.dataUser.dataScan);
  return (
    <div className='p-[16px] absolute bottom-0 w-full'>
      <div className='flex justify-between items-center text-[16px] font-bold bg-[#F9F9F9] h-[40px] p-[8px]'>
        <div>Total Quantity</div>
        <div>1 items</div>
      </div>
      <div className='bg-[#003F24] p-[8px] text-white text-[24px] font-medium text-center w-full'>
        VERIFY ITEMS
      </div>
    </div>
  );
}

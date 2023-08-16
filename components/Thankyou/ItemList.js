import { useSelector } from 'react-redux';
import { PlacticBag } from '../svg';
import Table from './Table';

export default function ItemList() {
  const data = useSelector((state) => state.dataUser.dataScan);
  return (
    <div className='p-[24px] bg-white'>
      <div className='flex justify-between w-full'>
        <div>
          <h1 className='text-[24px] font-semibold text-[#001E2B]'>
            Item List
          </h1>
          <p className='text-[16px] font-semibold text-[#001E2B]'>
            REFERENCE NO. <br />
            <span className='text-[18px]'>{data?.transactionRefNo}</span>
          </p>
        </div>
        <div className='bg-[#438E49] w-[187px] rounded-t-[16px] p-[16px] text-white text-[18px] font-semibold'>
          <div className='flex items-center'>
            <PlacticBag />
            <p className='ml-[16px] text-[18px]'>PLASTIC BAG</p>
          </div>
          <div className='flex justify-end'>
            <div className='text-[38px]'>0</div>
            <div className='text-[24px] ml-[8px] self-end'>PCS</div>
          </div>
        </div>
      </div>
      <Table data={data} />
    </div>
  );
}

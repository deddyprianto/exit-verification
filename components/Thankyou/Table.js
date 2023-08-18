import { useEffect, useState } from 'react';
import { ArrowLeft, ArrotRight } from '../svg';
import { RenderHeaderTable, RenderBodyTable } from './HeadBodyTable';

export default function Table({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPaginate, setDataPaginate] = useState([]);
  const itemsPerPage = 3;

  function paginateArray(data, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex);
  }

  useEffect(() => {
    if (data) {
      let paginatedData = paginateArray(
        data?.details,
        currentPage,
        itemsPerPage
      );
      setDataPaginate(paginatedData);
    }
  }, [currentPage, data]);

  return (
    <div className='flex flex-col'>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden border border-gray-200 rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
              <RenderHeaderTable />
              {dataPaginate?.map((items) => {
                return <RenderBodyTable key={items} data={items} />;
              })}
            </table>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end items-center mt-[8px]'>
        <div
          onClick={() => {
            setCurrentPage((prev) => --prev);
            paginateArray(data?.details, currentPage, itemsPerPage);
          }}
          className='w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer'
        >
          <ArrowLeft />
        </div>
        <div className='text-[25px] text-[#9D9D9D] font-semibold mx-[24px] w-[100px] text-center'>
          1/2
        </div>
        <div
          onClick={() => {
            setCurrentPage((prev) => ++prev);
            paginateArray(data?.details, currentPage, itemsPerPage);
          }}
          className='w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer'
        >
          <ArrotRight />
        </div>
      </div>
    </div>
  );
}

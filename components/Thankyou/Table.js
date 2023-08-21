import { useState } from 'react';
import { ArrowLeft, ArrotRight } from '../svg';
import { RenderHeaderTable, RenderBodyTable } from './HeadBodyTable';

export default function Table({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data?.details?.length / itemsPerPage);

  const paginatedData = data?.details?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden border border-gray-200 rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
              <RenderHeaderTable />
              {paginatedData?.map((items) => {
                return <RenderBodyTable key={items} data={items} />;
              })}
            </table>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end items-center mt-[8px]'>
        <button
          disabled={currentPage === 1 || data.length < itemsPerPage}
          onClick={handleNextClick}
          className='w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer '
        >
          <ArrowLeft />
        </button>
        <div className='text-[25px] text-[#9D9D9D] font-semibold mx-[24px] w-[100px] text-center'>
          1/2
        </div>
        <button
          disabled={currentPage === totalPages || data.length < itemsPerPage}
          onClick={handlePrevClick}
          className='w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer'
        >
          <ArrotRight />
        </button>
      </div>
    </div>
  );
}

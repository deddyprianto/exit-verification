import { useState, useEffect } from 'react';
import { ArrowLeft, ArrotRight } from '../svg';
import { RenderHeaderTable, RenderBodyTable } from './HeadBodyTable';
import { useDispatch } from 'react-redux';
import { setBagItem } from '@/feature/saveDataSlice';

export default function Table({ data }) {
  const a = data?.details;
  const dispatch = useDispatch();
  const [isArrayFiltered, setIsArrayFiltered] = useState([]);
  const [dataSlice, setDataSlice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const filteredData = a?.filter((item) => {
      if (item?.product?.id === '458340f2-1506-41e7-9bbd-28900eba1045') {
        setIsArrayFiltered((prevArray) => [...prevArray, item]);
        return false;
      }
      return true;
    });

    setDataSlice(filteredData);
  }, [a]);

  useEffect(() => {
    if (isArrayFiltered.length > 0) {
      dispatch(setBagItem(isArrayFiltered));
    }
  }, [isArrayFiltered]);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(dataSlice?.length / itemsPerPage) || 1;

  const paginatedData = dataSlice?.slice(
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
      <div>
        <div className='inline-block min-w-full'>
          <div className='overflow-hidden border border-gray-200 rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
              <RenderHeaderTable />
              {paginatedData?.map((items) => (
                <RenderBodyTable key={items.id} data={items} />
              ))}
            </table>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end items-center mt-[8px]'>
        <button
          disabled={currentPage === 1 || data?.details?.length < itemsPerPage}
          onClick={handlePrevClick}
          className={`w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer ${
            currentPage === 1 || data?.details?.length < itemsPerPage
              ? 'opacity-30'
              : 'opacity-100'
          } `}
        >
          <ArrowLeft />
        </button>
        <div className='text-[25px] text-[#9D9D9D] font-semibold mx-[24px] w-[100px] text-center'>
          {currentPage}/{totalPages}
        </div>
        <button
          disabled={
            currentPage === totalPages || dataSlice?.length < itemsPerPage
          }
          onClick={handleNextClick}
          className={`w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer ${
            currentPage === totalPages || dataSlice?.length < itemsPerPage
              ? 'opacity-30'
              : 'opacity-100'
          }`}
        >
          <ArrotRight />
        </button>
      </div>
    </div>
  );
}
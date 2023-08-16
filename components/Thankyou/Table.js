import { ArrowLeft, ArrotRight } from '../svg';
import { RenderHeaderTable, RenderBodyTable } from './HeadBodyTable';
export default function Table({ data }) {
  function paginateArray(data, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  const d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sample array data
  const itemsPerPage = 3; // Number of items per page

  // Initial state
  let currentPage = 1;
  let paginatedData = paginateArray(d, currentPage, itemsPerPage);
  // // When the "Next" button is pressed
  // currentPage++;
  // paginatedData = paginateArray(data, currentPage, itemsPerPage);
  // console.log(paginatedData);

  // // When the "Prev" button is pressed
  // currentPage--;
  // paginatedData = paginateArray(data, currentPage, itemsPerPage);
  // console.log(paginatedData);

  return (
    <div className='flex flex-col'>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden border border-gray-200 rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
              <RenderHeaderTable />
              {data?.details?.map((items) => {
                return <RenderBodyTable key={items} data={items} />;
              })}
            </table>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end items-center mt-[8px]'>
        <div className='w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer'>
          <ArrowLeft />
        </div>
        <div className='text-[25px] text-[#9D9D9D] font-semibold mx-[24px] w-[100px] text-center'>
          1/2
        </div>
        <div className='w-[54px] h-[54px] flex justify-center items-center border border-[#D6D6D6] cursor-pointer'>
          <ArrotRight />
        </div>
      </div>
    </div>
  );
}

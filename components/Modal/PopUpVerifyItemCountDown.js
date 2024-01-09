import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { SVGIconSeru } from '../svg';
import { useSelector, useDispatch } from 'react-redux';
import { setIsRefreshPage } from '@/feature/saveDataSlice';
import iconCheck from '@/assets/img/iconCheck.png';
import { changeFormatDate } from '@/helper';
import { useRouter } from 'next/navigation';

export function PopUpVerifyItemCountDown() {
  const route = useRouter();
  const dispatch = useDispatch();
  const verifyItem = useSelector((state) => state.dataUser.verifyItem);
  const data = useSelector((state) => state.dataUser.dataScan);
  const dataSlicePaginate = useSelector(
    (state) => state.dataUser.dataSlicePaginate
  );
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (verifyItem.showPopup) {
      if (count > 0) {
        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
      } else if (count === 0) {
        dispatch(setIsRefreshPage(true));
        route.push('/');
      }
    }
  }, [count, verifyItem]);

  const isErrorVerify = verifyItem.isError;
  return (
    <Transition appear show={verifyItem.showPopup} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => verifyItem.showPopup}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center  text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-[560px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all lg:w-[650px] p-[16px] lg:p-[24px]'>
                <Dialog.Title
                  as='div'
                  className='p-[16px] flex justify-center items-center flex-col'
                >
                  {isErrorVerify ? (
                    <SVGIconSeru />
                  ) : (
                    <img src={iconCheck.src} alt='icon check' />
                  )}
                  <div className='text-[24px] font-bold text-center mt-[7px] text-[#003F24] lg:text-[36px]'>
                    {isErrorVerify ? '' : 'Items Verified'}
                  </div>
                </Dialog.Title>
                {!isErrorVerify ? (
                  <div className='text-center text-[16px] lg:text-[24px] font-medium text-black '>
                    <div>Reference No</div>
                    <div className='mt-[8px]'>{data?.transactionRefNo}</div>

                    <div
                      className='flex justify-between items-center p-[16px] text-[16px] font-normal lg:text-[24px] mt-[8px]'
                      style={{
                        backgroundColor:
                          'var(--grey-scale-color-grey-scale-4, #F9F9F9)',
                        color: 'var(--grey-scale-color-grey-scale-2, #9D9D9D)',
                      }}
                    >
                      <div>Order Time</div>
                      <div>{changeFormatDate(data?.transactionDate)}</div>
                    </div>

                    <div
                      className='flex justify-between items-center p-[16px] text-[16px] font-normal lg:text-[24px]'
                      style={{
                        backgroundColor:
                          'var(--grey-scale-color-grey-scale-4, #F9F9F9)',
                        color: 'var(--grey-scale-color-grey-scale-2, #9D9D9D)',
                      }}
                    >
                      <div>Total Items</div>
                      <div>{dataSlicePaginate} Items</div>
                    </div>

                    <div
                      className='flex justify-between items-center p-[16px] text-[16px] font-normal lg:text-[24px]'
                      style={{
                        backgroundColor:
                          'var(--grey-scale-color-grey-scale-4, #F9F9F9)',
                        color: 'var(--grey-scale-color-grey-scale-2, #9D9D9D)',
                      }}
                    >
                      <div>Total Payment</div>
                      <div>$ {data?.totalNettAmount}</div>
                    </div>
                  </div>
                ) : (
                  <div className='text-center  text-[24px] font-medium text-black mb-5'>
                    <div>{verifyItem?.data?.message}</div>
                  </div>
                )}

                <div className='h-[90px]'>
                  <div
                    onClick={() => {
                      dispatch(setIsRefreshPage(true));
                      route.push('/');
                    }}
                    className='flex justify-center items-center bg-[#003F24] p-[8px] h-[57px] cursor-pointer'
                  >
                    <div className='text-white p-[8px] ml-[8px] rounded-[4px] text-[24px] font-medium lg:text-[36px]'>
                      Back to Start
                    </div>
                  </div>
                </div>
                {!isErrorVerify && (
                  <div className='text-[24px] text-center lg:text-[36px] font-medium'>
                    Redirect you back to start in {count}s
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

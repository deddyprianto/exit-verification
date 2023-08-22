import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import {
  setIsErrorScan,
  setIsLoading,
  setValueScanner,
} from '@/feature/saveDataSlice';
import iconLoading from '@/assets/img/iconLoading.png';

export function LoadingPopup({ isLoading }) {
  const dispatch = useDispatch();
  return (
    <Transition appear show={isLoading} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => isLoading}>
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
              <Dialog.Panel className='w-[560px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all lg:w-[650px]'>
                <Dialog.Title
                  as='div'
                  className='p-[16px] h-[122px] flex justify-center items-center flex-col'
                >
                  <img src={iconLoading.src} alt='animationLoading' />
                  <div className='text-[24px] font-bold text-center mt-[7px] text-[#003F24]'>
                    Please Wait
                  </div>
                </Dialog.Title>

                <div className='p-[16px] h-[104px] text-center text-[24px] font-medium text-black'>
                  Searching for your receipt...
                </div>

                <div className='p-[16px] h-[90px]'>
                  <div
                    onClick={() => {
                      dispatch(setValueScanner(''));
                      dispatch(setIsErrorScan(false));
                      dispatch(setIsLoading(false));
                    }}
                    className='flex justify-center items-center border border-[#003F24] p-[8px] h-[57px] cursor-pointer'
                  >
                    <div className='text-[#003F24] p-[8px] ml-[8px] rounded-[4px] text-[24px] font-medium'>
                      CANCEL
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

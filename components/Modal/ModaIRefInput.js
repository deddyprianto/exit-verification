import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export function ModaIRefInput({ setIsOpen, isOpen }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setIsOpen}>
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
                  className='p-[16px] h-[68px] lg:h-[86px]'
                >
                  <div className='text-[24px] font-bold text-center'>
                    Input Order Reference
                  </div>
                </Dialog.Title>

                <div className='p-[16px] h-[84px] lg:h-[128px]'>
                  <input
                    placeholder='Order Reference Number'
                    className='border border-[#888787] w-full px-[16px] py-[8px] outline-none text-[24px] font-normal'
                  />
                  {/* error 116px*/}
                  {/* <div className='text-[16px] font-medium text-[#C81720] italic mt-[8px]'>
                    Order not found, please re-enter your reference number
                  </div> */}
                </div>
                <div className='p-[16px] h-[84px] lg:h-[102px]'>
                  <div className='text-[24px] font-normal text-center flex justify-between items-center'>
                    <div
                      onClick={() => setIsOpen(false)}
                      className=' flex justify-center items-center w-[256px] h-[52px] border border-[#003F24] p-[8px] mr-[8px] rounded-[4px] text-[#003F24] lg:w-[301px] lg:h-[70px]'
                    >
                      CANCEL
                    </div>
                    <div className='flex justify-center items-center h-[52px] w-[256px] bg-[#003F24] text-white p-[8px] ml-[8px] rounded-[4px] lg:w-[301px] lg:h-[70px]'>
                      SUBMIT
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

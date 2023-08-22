import { SVGQRScanner } from '../svg';
import { useState } from 'react';
import { ModaIRefInput } from '../Modal/ModaIRefInput';
import Scanner from './Scanner';

export default function MainCP({ hiddenField, baseURL, token }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='p-[24px] bg-white'>
      <Scanner hiddenField={hiddenField} baseURL={baseURL} token={token} />
      <div className='h-[54px] mt-[16px] flex justify-center items-center lg:h-[72px]'>
        <SVGQRScanner />
        <div className='text-[24px] font-medium text-black'>
          Please scan your receipt to verify your items.
        </div>
      </div>

      <div className='w-full h-[36px] items-center grid grid-cols-15 lg:grid-cols-16 lg:h-[54px]'>
        <hr className='bg-black' />
        <div className='font-bold text-[24px] mx-[10px]'>OR</div>
        <hr className='bg-black' />
      </div>
      <div className='h-[108px] mt-[16px] flex justify-center flex-col items-center lg:h-[144px]'>
        <div className='w-[499px] text-[24px]'>
          <div className='font-medium  text-black'>
            input your order reference manually here
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className='bg-[#003F24] cursor-pointer rounded-[4px] text-center p-[8px] text-white mt-[24px]'
          >
            INPUT ORDER REFERENCE
          </div>
        </div>
      </div>
      <ModaIRefInput
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        baseURL={baseURL}
        token={token}
      />
    </div>
  );
}

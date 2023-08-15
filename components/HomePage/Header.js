import banner from '@/assets/img/image.png';
import logo from '@/assets/img/logo.png';
import { SVGDate, SVGLocation } from '../svg';
export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className='p-[24px] h-[276px] lg:h-[354px]'
    >
      <div
        className='bg-white rounded-[16px] w-full flex justify-between h-[104px] p-[16px] lg:h-[128px] lg:p[24px]'
        style={{
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
        }}
      >
        <img src={logo.src} />
        <div className='justify-items-end h-[48px] text-[18px]  font-medium lg:text-[24px]'>
          <div className='flex items-center justify-end'>
            <SVGLocation />
            <div className='ml-[8px]'>Head Quarter</div>
          </div>
          <div className='flex items-center mt-[16px]'>
            <SVGDate />
            <div className='ml-[8px]'>Mon, 15 May 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}

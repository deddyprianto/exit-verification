import defaultImage from '@/assets/img/pot1.png';
import Image from 'next/image';

export const RenderHeaderTable = () => {
  return (
    <thead className='h-[56px] lg:h-[68px] '>
      <tr>
        <th
          scope='col'
          className='w-[469px] text-[16px] font-bold text-center lg:w-[744px] lg:text-[24px]'
        >
          Item Name
        </th>
        <th
          scope='col'
          className='text-[16px] font-bold text-center lg:text-[24px]'
        >
          Subtotal
        </th>
        <th
          scope='col'
          className='text-[16px] font-bold text-center lg:text-[24px]'
        >
          Qty
        </th>
      </tr>
    </thead>
  );
};
export const RenderBodyTable = ({ data }) => {
  const isModifierExist = data.modifiers;
  const isProductImageExist = data?.product?.defaultImageURL;
  return (
    <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 text-[14px] lg:text-[24px]'>
      <tr>
        <td className='w-[469px] lg:w-[744px]'>
          <div className='grid grid-cols-17 bg-red-500'>
            <div className='relative w-16 h-16'>
              {isProductImageExist ? (
                <Image src={data?.product?.defaultImageURL} alt='image' fill />
              ) : (
                <Image src={defaultImage} alt='image' fill />
              )}
            </div>
            <div className='text-center '>1x</div>
            <div>
              <div>{data?.product?.name}</div>
            </div>
          </div>

          {/* MODIFIER */}
          {isModifierExist?.map((item) => (
            <div key={item.id} className='grid grid-cols-17'>
              <div></div>
              <div className='justify-self-center'>1x</div>
              <div>
                Repotting Service Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
              </div>
            </div>
          ))}
        </td>
        <td className='w-[96px] lg:w-[128px] text-center bg-red-400 '>
          <div className='bg-purple-600'>$ {data?.nettAmount}</div>
          <div>$ 500</div>
        </td>
        <td className='w-[96px] lg:w-[128px] text-center bg-green-400'>
          <div>{data?.quantity}</div>
          <div className='text-transparent'>-</div>
        </td>
      </tr>
    </tbody>
  );
};

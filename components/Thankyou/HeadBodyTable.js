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
        <td className='w-[469px] lg:w-[744px] '>
          <div className='grid grid-cols-17 mt-6 '>
            <div className='relative w-[36px] h-[36px] justify-self-center '>
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
          {isModifierExist?.map((item) => {
            return item?.modifier?.details.map((itemMod) => {
              return (
                <div key={itemMod?.id} className='grid grid-cols-17'>
                  <div></div>
                  <div className='justify-self-center'>
                    {itemMod?.quantity}x
                  </div>
                  <div>{itemMod?.name}</div>
                </div>
              );
            });
          })}
        </td>

        <td className='w-[96px] lg:w-[128px] text-center relative '>
          <div className='absolute top-6 left-9'>$ {data?.nettAmount}</div>
          <div className='absolute bottom-0 left-9'>
            {isModifierExist?.map((item) => {
              return item?.modifier?.details.map((itemMod) => {
                return <div key={itemMod?.id}>$ {itemMod?.price}</div>;
              });
            })}
          </div>
        </td>
        <td className='w-[96px] lg:w-[128px] text-center relative'>
          <div className='absolute top-6 left-12'>{data?.quantity}</div>
          <div className='text-transparent mt-5'>
            <div className='mt-5'>
              {isModifierExist?.map((item) => {
                return item?.modifier?.details.map((itemMod) => {
                  return (
                    <div className='text-transparent' key={itemMod?.id}>
                      $ {itemMod?.price}
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

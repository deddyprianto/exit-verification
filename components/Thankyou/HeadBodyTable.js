import defaultImage from '@/assets/img/pot1.png';
export const RenderHeaderTable = () => {
  return (
    <thead className='h-[56px] lg:h-[68px]'>
      <tr>
        <th
          scope='col'
          className='w-[469px] text-[16px] font-bold text-center lg:w-[744px]'
        >
          Item Name
        </th>
        <th scope='col' className='text-[16px] font-bold text-center'>
          Subtotal
        </th>
        <th scope='col' className='text-[16px] font-bold text-center'>
          Qty
        </th>
      </tr>
    </thead>
  );
};

export const RenderBodyTable = ({ data }) => {
  return (
    <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
      <tr>
        <td className='w-[469px] lg:w-[744px]'>
          <div className='grid grid-cols-17 p-[8px] items-center'>
            <img src={defaultImage.src} />
            <div className='justify-self-center'>1x</div>
            <div>{data?.product?.name}</div>
          </div>
          {/* <div className='grid grid-cols-17 p-[8px] items-start'>
            <img src={defaultImage.src} />
            <div className='justify-self-center'>1x</div>
            <div>
              Repotting Service Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </div>
          </div> */}
        </td>
        <td className='w-[96px] lg:w-[128px] text-center'>
          $ {data?.nettAmount}
        </td>
        <td className='w-[96px] lg:w-[128px] text-center'>{data?.quantity}</td>
      </tr>
    </tbody>
  );
};

import defaultImage from '@/assets/img/placeholder.jpeg';
import Image from 'next/image';

export const RenderHeaderTable = () => {
  return (
    <div className='border border-gray-200 w-full rounded-t-lg grid grid-cols-19 p-[8px] text-[16px] font-bold lg:grid-cols-20 border-b-[2px] lg:text-[24px]'>
      <div className='h-[40px] flex items-center justify-center'>Item Name</div>
      <div className='h-[40px] flex items-center justify-end'>Subtotal</div>
      <div className='h-[40px] flex items-center justify-center'>Qty</div>
    </div>
  );
};
export const RenderBodyTable = ({ data, paginatedData }) => {
  const isModifierExist = data.modifiers;
  const isProductImageExist = data?.product?.defaultImageURL;

  return (
    <div className='border-b border-gray-200 w-full grid grid-cols-19 p-[8px] text-[14px] font-normal lg:grid-cols-20 lg:text-[24px]'>
      <div>
        <div className='grid grid-cols-21 '>
          <div className='relative w-[36px] h-[36px] justify-self-center '>
            {isProductImageExist ? (
              <Image src={data?.product?.defaultImageURL} alt='image' fill />
            ) : (
              <Image src={defaultImage} alt='image' fill />
            )}
          </div>
          <div>1x</div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td
                    style={{
                      width: '100%',
                      display: '-webkit-box',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {data?.product?.name}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {isModifierExist?.map((item) => {
          return item?.modifier?.details.map((itemMod) => {
            return (
              <div key={itemMod?.productID} className='grid grid-cols-21'>
                <div></div>
                <div>{itemMod?.quantity}x</div>
                <table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          width: '100%',
                          display: '-webkit-box',
                          WebkitLineClamp: '2',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {itemMod?.name}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          });
        })}
      </div>
      <div className='flex flex-col justify-between'>
        <div
          className={`grid ${
            paginatedData.length > 3 ? 'grid-cols-22' : 'grid-cols-23'
          }`}
        >
          <div className='justify-self-end'>$</div>
          <div className='ml-1 justify-self-end'>{data?.nettAmount}</div>
        </div>
        <div>
          {isModifierExist?.map((item) => {
            return item?.modifier?.details.map((itemMod) => {
              return (
                <div
                  key={itemMod?.productID}
                  className={`grid ${
                    paginatedData.length > 3 ? 'grid-cols-22' : 'grid-cols-23'
                  }`}
                >
                  <div className='justify-self-end'>$</div>
                  <div className='justify-self-end'>{itemMod?.price}</div>
                </div>
              );
            });
          })}
        </div>
      </div>
      <div className='p-[8px] text-center'>{data?.quantity}</div>
    </div>
  );
};

export const RenderBodyTables = ({ data }) => {
  const isModifierExist = data.modifiers;
  const isProductImageExist = data?.product?.defaultImageURL;
  return (
    <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 text-[14px] lg:text-[24px]'>
      <tr>
        <td className='w-[469px] lg:w-[744px] p-[8px]'>
          <div className='grid grid-cols-17 mt-6 '>
            <div className='relative w-[36px] h-[36px] justify-self-center '>
              {isProductImageExist ? (
                <Image src={data?.product?.defaultImageURL} alt='image' fill />
              ) : (
                <Image src={defaultImage} alt='image' fill />
              )}
            </div>
            <div className='text-center'>1x</div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td
                      style={{
                        width: '100%',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {data?.product?.name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {isModifierExist?.map((item) => {
            return item?.modifier?.details.map((itemMod) => {
              return (
                <div key={itemMod?.productID} className='grid grid-cols-17'>
                  <div></div>
                  <div className='justify-self-center'>
                    {itemMod?.quantity}x
                  </div>

                  <table>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            width: '100%',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {itemMod?.name}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            });
          })}
        </td>

        <td className='w-[96px] lg:w-[128px] text-center relative p-[8px]'>
          <div className='absolute top-6 left-9 '>$ {data?.nettAmount}</div>
          <div className='absolute bottom-0 left-9'>
            {isModifierExist?.map((item) => {
              return item?.modifier?.details.map((itemMod) => {
                return <div key={itemMod?.productID}>$ {itemMod?.price}</div>;
              });
            })}
          </div>
        </td>
        <td className='w-[96px] lg:w-[128px] text-center relative p-[8px]'>
          <div className='absolute top-6 left-12'>{data?.quantity}</div>
          <div className='text-transparent mt-5'>
            <div className='mt-5'>
              {isModifierExist?.map((item) => {
                return item?.modifier?.details.map((itemMod) => {
                  return (
                    <div className='text-transparent' key={itemMod?.productID}>
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

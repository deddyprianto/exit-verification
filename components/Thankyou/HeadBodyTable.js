import defaultImage from '@/assets/img/placeholder.jpeg';
import Image from 'next/image';

export const RenderHeaderTable = () => {
  return (
    <div className='border border-gray-200 w-full rounded-t-lg grid grid-cols-19 p-[8px] text-[16px] font-bold lg:grid-cols-20 border-b-[2px] lg:text-[24px]'>
      <div className='h-[40px] flex items-center justify-center'>Item Name</div>
      <div className='h-[40px] flex items-center justify-end'>Subtotal</div>
      <div className='h-[40px] flex items-center justify-center pl-[7px]'>
        Qty
      </div>
    </div>
  );
};
export const RenderBodyTable = ({ data }) => {
  const isModifierExist = data.modifiers;
  const isProductImageExist = data?.product?.defaultImageURL;
  return (
    <div className='border-b border-gray-200 w-full grid grid-cols-19 pt-[8px] pb-[8px] text-[14px] font-normal lg:grid-cols-20 lg:text-[24px] lg:pt-[20px] lg:pb-[20px]'>
      <div>
        <div className={`grid grid-cols-22`}>
          <div className='relative w-[36px] h-[36px] justify-self-center'>
            {isProductImageExist ? (
              <Image src={data?.product?.defaultImageURL} alt='image' fill />
            ) : (
              <Image src={defaultImage} alt='image' fill />
            )}
          </div>
          <div className='ml-[10px]'>
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
                      marginTop: isModifierExist?.length === 0 && '5px',
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
              <div key={itemMod?.productID} className='grid grid-cols-22'>
                <div></div>
                <div className='ml-[10px] flex items-center'>
                  <div className='mr-[5px]'>{itemMod?.quantity}x</div>
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
              </div>
            );
          });
        })}
      </div>

      <div
        className={`flex flex-col justify-between ${
          isModifierExist?.length === 0 && 'mt-[5px]'
        }`}
      >
        <div className='grid grid-cols-23'>
          <div className='justify-self-end'>$</div>
          <div className='ml-[2px] justify-self-end'>
            {data?.nettAmount.toFixed(2)}
          </div>
        </div>
        <div>
          {isModifierExist?.map((item) => {
            return item?.modifier?.details.map((itemMod) => {
              return (
                <div key={itemMod?.productID} className='grid grid-cols-23'>
                  <div className='justify-self-end'>$</div>
                  <div className='justify-self-end'>{itemMod?.price}</div>
                </div>
              );
            });
          })}
        </div>
      </div>

      <div
        className={`text-center ${isModifierExist?.length === 0 && 'mt-[5px]'}`}
      >
        {data?.quantity}
      </div>
    </div>
  );
};


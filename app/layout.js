import './globals.css';
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
const PopinsPlus = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});
import ProviderSession from '@/components/Provider';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={PopinsPlus.className}>
        <Toaster
          position='top-center'
          toastOptions={{
            className: 'font-popins',
          }}
        />
        <ProviderSession>
          <div className='w-screen h-screen'>{children}</div>
        </ProviderSession>
      </body>
    </html>
  );
}

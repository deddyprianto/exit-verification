import Thankyou from '@/components/Thankyou';

export default function ThankyouPage() {
  const baseURL = process.env.BASE_URL;
  const token = process.env.Authorization;
  return <Thankyou baseURL={baseURL} token={token} />;
}

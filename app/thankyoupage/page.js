import Thankyou from '@/components/Thankyou';

export default function ThankyouPage() {
  const baseURL = process.env.BASE_URL;
  const token = process.env.Authorization;
  const outletAddress = process.env.OUTLET_ADDRESS;
  return (
    <Thankyou baseURL={baseURL} token={token} outletAddress={outletAddress} />
  );
}

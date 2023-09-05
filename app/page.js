import HomePage from '@/components/HomePage';

export default function Home() {
  const outletAddress = process.env.OUTLET_ADDRESS;
  const baseURL = process.env.BASE_URL;
  const token = process.env.Authorization;
  const debug = process.env.DEBUG;

  return (
    <HomePage
      outletAddress={outletAddress}
      baseURL={baseURL}
      token={token}
      debug={debug}
    />
  );
}

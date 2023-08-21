import HomePage from '@/components/HomePage';

export default function Home() {
 const outletAddress = process.env.DEFAULT_OUTLET;
 return <HomePage outletAddress={outletAddress} />;
}

import HomePage from '@/components/HomePage';

export default function Home() {
 const outletAddress = process.env.OUTLET_ADDRESS;
 const hiddenField = process.env.HIDDEN_FIELD;
 return <HomePage outletAddress={outletAddress} hiddenField={hiddenField} />;
}

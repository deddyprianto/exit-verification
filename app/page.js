import HomePage from '@/components/HomePage';

export default function Home() {
 const outletAddress = process.env.OUTLET_ADDRESS;
 const hiddenField = process.env.HIDDEN_FIELD;
 const baseURL = process.env.BASE_URL;
 const token = process.env.Authorization;

 return (
   <HomePage
     outletAddress={outletAddress}
     hiddenField={hiddenField}
     baseURL={baseURL}
     token={token}
   />
 );
}

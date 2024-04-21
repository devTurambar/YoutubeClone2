import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import LoginForm from "@/components/LoginForm";

// Import a component without SSR
const NoSSRComponent = dynamic(() => import("./NoSSRComponent/page"), {
  ssr: false, // This line is key!
});


// axios.get('https://api.github.com/users/mapbox')
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config); 
//   });


export default function Home({ data }) {
  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center p-24 bg-slate-600">
        <LoginForm />
      </div>
    </main>
  );
}

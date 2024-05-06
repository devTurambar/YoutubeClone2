// 'use client'

import dynamic from "next/dynamic";
import LoginForm from "../components/LoginForm";
// import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getUserSession } from "../lib/session";

// Import a component without SSR
// const NoSSRComponent = dynamic(() => import("./NoSSRComponent/page"), {
//   ssr: false, // This line is key!
// });



// export default async function Home({ data }) {
//    const { data: session } = useSession();
// if(session && session.user){
//   redirect("/dashboard");
// }
export default async function Home() {
  const user = await getUserSession(true);
  if(user){
    redirect("/dashboard");
  }

  return (
    <main>
      {/* <div className="flex h-screen flex-col items-center justify-center p-24 bg-slate-600">
        <LoginForm />
      </div> */}
    </main>
  );
}

"use client"

import { signIn } from "next-auth/react"

export default function LoginForm(){
    async function login(submit){
        submit.preventDefault();
        const formData = new FormData(submit.currentTarget);
        const data = {
            email: formData.get("email"),
            password: formData.get("password")
        };
        console.log(data);

        //next-auth...credentials é o tipo de provider

        // signIn("credentials", {
        //     ...data,
        //     callbackUrl: "/dashboard"
        // });
    }

    return (
        <form onSubmit={login} className="bg-white p-12 rounded-lg w-96 max-w-full px-7 flex flex-col gap-2 justify-center items-center">
            <h2 className="font-bold text-xl mb-3">Login Here</h2>
            <input type="email" className="input input-primary w-full" placeholder="Email" name="email"/>
            <input type="password" className="input input-primary w-full" placeholder="Password" name="password"/>
            <button className="btn btn-primary w-full" type="submit" >Login</button>
            {/* <NoSSRComponent />
            <div className="pointer">
            <Link href="/NoSSRComponent">       
                Click Here to go to another page bich
            </Link>
            </div>            */}
        </form>
    );
}
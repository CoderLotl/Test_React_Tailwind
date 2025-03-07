import { useState } from "react";
import { LoginForm } from "../templates/LoginForm.tsx";

export default function Login()
{
    const [name, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='rounded-md overflow-hidden mt-[10%] w-[400px] self-center shadow-[0px_10px_6px_0px_rgba(0,_0,_0,_0.35)]'>
            <div className='py-[20px] flex justify-center bg-green-700 text-slate-200 font-bold text-2xl'>
                Login
            </div>
            <LoginForm
                name={name} setUserName={setUserName} password={password} setPassword={setPassword}
            />

        </div>
    );
}
import { useState } from "react";

export default function Login()
{
    const [name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div id='login_form' className='rounded-md overflow-hidden mt-[10%] w-[400px] self-center shadow-[0px_10px_6px_0px_rgba(0,_0,_0,_0.35)]'>
            <div id='login_header' className='py-[20px] flex justify-center bg-green-700 text-slate-200 font-bold text-2xl'>
                Login
            </div>
            <div id='login_body' className='bg-slate-200'>
                <div id='login_inputs' className='flex flex-col px-[50px] py-[50px]'>
                    <input placeholder='Username' type='text'
                    className='border border-slate-400 border-b-4 bg-slate-300 placeholder:text-slate-700 placeholder:italic
                    outline-hidden focus:border-b-violet-600 focus:placeholder:opacity-[0.0]
                    caret-black
                    p-2
                    mb-5'
                    value={name} onChange={(e)=>setUserName(e.target.value)}
                    >
                    </input>

                    <input placeholder='Password' type='password'
                    className='border border-slate-400 border-b-4 bg-slate-300 placeholder:text-slate-700 placeholder:italic
                    outline-hidden focus:border-b-violet-600 focus:placeholder:opacity-[0.0]
                    caret-black
                    p-2
                    mb-5'
                    value={password} onChange={(e)=>setPassword(e.target.value)}
                    >
                    </input>

                    <button className='bg-emerald-700 hover:cursor-pointer p-2 hover:bg-orange-700
                    shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.8)] duration-[250ms] active:translate-y-[4px] active:shadow-[0px_4px_0px_0px_rgba(0,_0,_0,_0.8)]'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
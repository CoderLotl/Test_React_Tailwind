import { useState } from "react";
import { LoginForm } from "../templates/LoginForm.tsx";
import { LogIn } from "../hooks/LoginHook.tsx";
import { useNavigate } from "react-router";
import { BASE_PATH } from '../config/config.tsx';

export default function Login()
{
    const [name, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const signUp = useNavigate();

    return (
        <div className='rounded-md overflow-hidden mt-[10%] w-[400px] self-center shadow-[0px_10px_6px_0px_rgba(0,_0,_0,_0.35)]'>
            <div className='py-[20px] flex justify-center bg-green-700 text-slate-200 font-bold text-2xl'>
                Login
            </div>
            <LoginForm
                name={name} setUserName={setUserName} password={password} setPassword={setPassword} onLogin={LogIn}
            />
            <p className="bg-slate-200 text-slate-700 flex justify-center pb-3">Need an account?
                <span onClick={()=>signUp(`${BASE_PATH}/signUp`)}
                    className="ml-1 hover:cursor-pointer text-green-600 hover:text-green-500"
                    >Sign up!
                </span>
            </p>

        </div>
    );
}
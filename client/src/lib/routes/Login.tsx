import { useState, useEffect } from "react";
import { LoginForm } from "../templates/LoginForm.tsx";
import { LogIn, CheckIfLoggedIn } from "../hooks/LoginHook.tsx";
import { useNavigate } from "react-router";
import Title from "../components/Title.tsx";

export default function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();    
    useEffect(()=>
    {
        const checkLogginStatus = async ()=>
        {
            const loggedIn = await CheckIfLoggedIn();            
            console.log(loggedIn);
            
            if(loggedIn)
            {            
                navigate('/home');
            }
            else
            {
                setLoading(false);
            }
        }

        checkLogginStatus();
    }, [navigate]);

    if(loading)
    {
        return('');
    }

    return(
        <>
            <Title title="Login"/>
            <div className='rounded-md overflow-hidden mt-[10%] w-[400px] self-center shadow-[0px_10px_6px_0px_rgba(0,_0,_0,_0.35)]'>
                <div className='py-[20px] flex justify-center bg-green-700 text-slate-200 font-bold text-2xl'>
                    Login
                </div>
                <LoginForm
                    email={email} setEmail={setEmail} password={password} setPassword={setPassword} onLogin={LogIn}
                />
                <p className="bg-slate-200 text-slate-700 flex justify-center pb-3">Need an account?
                    <span onClick={()=>navigate(`/signUp`)}
                        className="ml-1 hover:cursor-pointer text-green-600 hover:text-green-500"
                        >Sign up!
                    </span>
                </p>

            </div>
        </>
    );
}
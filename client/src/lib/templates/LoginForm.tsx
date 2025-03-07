import { Input } from "../components/LoginInput";

interface LoginFormProps
{
    name: string,
    setUserName: (value: string) => void;
    password: string,
    setPassword: (value: string) => void;
    onLogin: (username: string, password: string) => void;
}

export function LoginForm({name, setUserName, password, setPassword, onLogin} : LoginFormProps)
{
    return(
        <div className='bg-slate-200'>
        <div className='flex flex-col px-[50px] py-[50px]'>
            <Input
                placeholder="Username" type="text" value={name} setValue={setUserName}
                className="border border-slate-400 border-b-4 bg-slate-300 placeholder:text-slate-700 placeholder:italic
                outline-hidden focus:border-b-violet-600 focus:placeholder:opacity-[0.0]
                caret-black p-2 mb-5"
            />                    

            <Input
                placeholder="Password" type="password" value={password} setValue={setPassword}
                className="border border-slate-400 border-b-4 bg-slate-300 placeholder:text-slate-700 placeholder:italic
                outline-hidden focus:border-b-violet-600 focus:placeholder:opacity-[0.0]
                caret-black p-2 mb-5"
            />

            <button className='bg-emerald-700 hover:cursor-pointer p-2 hover:bg-orange-700
            shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.8)] duration-[250ms] active:translate-y-[4px] active:shadow-[0px_4px_0px_0px_rgba(0,_0,_0,_0.8)]'
            onClick={()=>onLogin(name, password)}>
                Login
            </button>
        </div>
    </div>
    );
}
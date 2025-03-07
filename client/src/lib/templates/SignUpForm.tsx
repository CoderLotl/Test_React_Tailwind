import { Input } from "../components/Input.tsx";
import { useNavigate } from "react-router";
import { BACK_PATH, BASE_PATH } from '../config/config.tsx';


interface SignUpFormProps
{
    name: string,
    setUserName: (value: string) => void;
    mail: string,
    setMail: (value: string) => void;
    onRegister: (username: string, mail: string) => void;
}

export function SignUpForm({name, setUserName, mail, setMail, onRegister} : SignUpFormProps)
{
    const clasnNameString = `border border-slate-400 border-b-4 bg-slate-300
        placeholder:text-slate-700 placeholder:italic outline-hidden focus:border-b-violet-600 focus:placeholder:opacity-[0.0] 
        caret-black p-2 mb-5`;

    const btnClassNameString = `bg-emerald-700 hover:cursor-pointer p-2 hover:bg-orange-700
        shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.8)] duration-[250ms] active:translate-y-[4px] active:shadow-[0px_4px_0px_0px_rgba(0,_0,_0,_0.8)]`

    const goBack = useNavigate();

    return(
        <div className='bg-slate-200'>
            <div className='flex flex-col px-[50px] py-[50px]'>
                <Input
                    placeholder="Username" type="text" value={name} setValue={setUserName}
                    className={clasnNameString}
                />                    

                <Input
                    placeholder="e-mail" type="email" value={mail} setValue={setMail}
                    className={clasnNameString}
                />

                <button className={btnClassNameString} onClick={()=>onRegister(name, mail)}>
                    Register
                </button>

                <button className={btnClassNameString} onClick={()=>goBack(`${BACK_PATH}/`)}>
                    Go back
                </button>
            </div>
        </div>
    );
}
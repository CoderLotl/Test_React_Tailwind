import { DataAccessFetch } from './services/DataAccessFetch.tsx';
import { useNavigate } from "react-router";
import { BACK_PATH, isDev } from '../config/config.tsx';
import { CheckMail } from './utilities/common.tsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function LogIn(email: string, password: string)
{    
    if( email == '' || password == '' )
    {
        toast.warn('Error: Please enter both email and password.');
        return false;
    }
    if(!CheckMail(email))
    {
        toast.warn('Error: Please check your entered email.');
        return false;
    }

    let dataAccess = new DataAccessFetch();
    let payload = { email: email, password: password };
    try
    {
        let serverResponse = await dataAccess.postData(`${BACK_PATH}/auth/login`, payload, true, true);

        if(!serverResponse)
        {
            toast.warn('Check your connection.');
            return false;
        }

        let resp = await (serverResponse as Response).json();
        if(resp.ok)
        {
            let svResponse = JSON.parse(resp['response']);

            if(svResponse.hasOwnProperty('token'))
            {                
                let navigate = useNavigate();                
                setTimeout(() =>
                {                        
                    navigate(`/home`);
                }, 1000);
            }
        }
        else
        {
            toast.error('Login failed. Please check your credentials.');
        }
    }
    catch(error)
    {
        toast.error(`${error}`);
    }
}

export async function CheckIfLoggedIn()
{
    if(isDev)
    {
        return false;
    }
    let dataAcces = new DataAccessFetch();
    let serverResponse = await dataAcces.getData(`${BACK_PATH}/auth/validate`, null, false, true, true);    
    return serverResponse;
}
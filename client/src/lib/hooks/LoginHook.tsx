import { DataAccessFetch } from './services/DataAccessFetch.tsx';
import { StorageManager } from './services/StorageManager.tsx';
import { useNavigate } from "react-router";
import { BACK_PATH, BASE_PATH } from '../config/config.tsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function LogIn(username: string, password: string)
{    
    if( username == '' || password == '')
    {
        toast.warn('Error: Please enter both username and password.');
        return false;
    }

    let dataAccess = new DataAccessFetch();
    let payload = { user: username, password: password };
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
                let storageManager = new StorageManager();
                let navigate = useNavigate();

                storageManager.WriteLS('user', username);
                setTimeout(() =>
                {                        
                    navigate(`${BASE_PATH}/home`);
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

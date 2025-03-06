import React, { ReactNode } from 'react';
import { DataAccessFetch } from '../hooks/services/DataAccessFetch.tsx';
import { StorageManager } from '../hooks/services/StorageManager.tsx';
import { useNavigate } from "react-router";
import { BACK_PATH, BASE_PATH } from '../config/config.tsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function Login_fn()
{      
    let username = (document.getElementById('login_username') as HTMLInputElement).value;
    let password = (document.getElementById('login_password') as HTMLInputElement).value;
    
    if(username !== '' && password !== '')
    {
        let dataAccess = new DataAccessFetch();
        let payload = { user: username, password: password };
        try
        {
            let serverResponse = await dataAccess.postData(`${BACK_PATH}/login`, payload, true, true);
            if(serverResponse)
            {
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
            else
            {
                toast.warn('Check your connection.');
            }
        }
        catch(error)
        {
            toast.error(`Error: ${error}`);
        }
    }
    else
    {
        toast.warn('Error: Please enter both username and password.');
    }
}
export class DataAccessFetch
{
    // GET
    async getData(url: string, params: string | null = null, returnResponse: boolean = false, showError: boolean = true, includeCredentials: boolean = false)
    {
        let requestUrl = url;
  
        if(params)
        {
            const queryString = new URLSearchParams(params).toString();
            if (queryString)
            {
                // If the URL already has a query string, append with '&'
                const separator = url.includes('?') ? '&' : '?';
                requestUrl = `${url}${separator}${queryString}`;
            }
        }

        try {
            let fetchParams =
            {
                method: 'GET',
                headers:
                {
                    'Content-Type': 'application/json'
                }                
            } as { method: string, headers: { 'Content-Type': string }, credentials?: string };;

            const response = await fetch(requestUrl,
            {
                method: 'GET',
                headers:
                {
                    'Content-Type': 'application/json'
                }
            });

            if(includeCredentials)
            {
                fetchParams.credentials = 'include';
            }

            if(response.ok)
            {
                const contentType = response.headers.get('Content-Type');
                if(contentType!.startsWith('image/'))
                {
                    try {
                        const blob = await response.blob();
                        
                        return blob;
                    }
                    catch (error)
                    {
                        console.error('Error converting response to blob:', error);
                        // Handle error (return error or display fallback)
                    }
                }
                else
                {
                    return returnResponse ? response : true;
                }
            }
            else
            {
                return returnResponse ? response : false;
            }
        }
        catch (error)
        {
            if(error instanceof TypeError)
            {                    
                throw new Error('network');
            }        
            if (showError)
            {
                console.error('Error posting data:', error);
            }
        
            throw error;
        }
    }
    
    // POST
    async postData(url: string, payload: Object | null = null, returnResponse: boolean = false, showError: boolean = true)
    {
        try{
            let response;
            let payL = payload !== null ? JSON.stringify(payload) : '';
    
            response = await fetch(url,
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: payL
            });            
    
            if(response.ok)
            {
                return returnResponse ? response : true;
            }
            else
            {
                return returnResponse ? response : false;
            }
        }
        catch(error)
        {            
            if(error instanceof TypeError)
            {                    
                throw new Error('network');
            }        
            if (showError)
            {
                console.error('Error posting data:', error);
            }
        
            throw error;
        }
    }

    // PUT
    async putData(url: string, payload: Object, showError: boolean = false)
    {
        try {
            const response = await fetch(url,
            {
                method: 'PUT',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)             
            });            

            return response.ok ? response : false;            
        }
        catch (error)
        {
            if(error instanceof TypeError)
            {                    
                throw new Error('network');
            }        
            if (showError)
            {
                console.error('Error putting data:', error);
            }
        
            throw error;
        }
    }
    
    // DELETE
    async deleteData(url: string, params: string | null = null, showError: boolean = false)
    {
        const queryString = new URLSearchParams(params || '').toString();
        const requestUrl = queryString  != '' ? `${url}?${queryString}` : url;
        try {
            const response = await fetch(requestUrl,
            {
                method: 'DELETE',
                headers:
                {
                    'Content-Type': 'application/json'
                }               
            });            

            return response.ok ? response : false;
        }
        catch (error)
        {
            if(error instanceof TypeError)
            {                    
                throw new Error('network');
            }        
            if (showError)
            {
                console.error('Error posting data:', error);
            }
        
            throw error;
        }
    }
}
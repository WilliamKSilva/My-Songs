import { useState, useEffect } from 'react';

interface authDataProps {
    access_token?: string;
    token_type?: string;
    expires_in?: string;
}

export function useAuth() {        
        
        const [ authData, setAuthData ] = useState({} as authDataProps)                

        function onLogin() {
            const client_id = "bb534c1334a64476be453f8488c7f536";
            const spotify_endpoint = "https://accounts.spotify.com/authorize"
            const redirect_url = "http://localhost:3000/metrics"
            const delimiter = "%20";
            const scopes = [
                "user-read-email",
                "user-top-read"
            ];
            const scopes_url_param = scopes.join(delimiter);

            window.location.href = `${spotify_endpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scopes_url_param}&response_type=token&show_dialog=true`

        }

            const authParams = (hash: any) => {
                const stringHashtag = hash.substring(1);
                const urlParams = stringHashtag.split("&");
                const splitedParams = urlParams.reduce((accumulater: string[], currentValue: any) => {
                    const [key, value] = currentValue.split("=");
                    accumulater[key] = value;
                    return accumulater;
                }, {});
                    
                return splitedParams;
            }

            useEffect(() => {
                if(window.location.hash) {
                    setAuthData(authParams(window.location.hash));
                }
            }, [])

                            

        return { onLogin, authData }
}
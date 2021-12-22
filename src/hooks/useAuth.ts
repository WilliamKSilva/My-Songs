import { useState, useEffect } from 'react';

interface authDataProps {
    access_token: string;
    expires_in: string;
    token_type: string;
}

export function useAuth() {                      
        const [isLogged, setIsLogged] = useState(false);

        /*
            const [authData, setAuthData] = useState({} as authDataProps)
        
            Need to be debugged, right now, when I try to setAuthData with route params like
            access_token, the value returns only undefined
        */

        function onLogin() {
            const client_id = "bb534c1334a64476be453f8488c7f536";
            const spotify_endpoint = "https://accounts.spotify.com/authorize"
            const redirect_url = "http://localhost:3000/metrics"
            const delimiter = "%20";
            const scopes = [
                "user-read-email",
                "user-top-read",
                "playlist-read-collaborative",
                "playlist-read-private",
                "user-top-read",
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
                    const { access_token } = (authParams(window.location.hash));
                    setIsLogged(true);      
                    localStorage.setItem('access_token', access_token)            
                }
            }, [])                                                                            

        return { onLogin, isLogged, setIsLogged }
}
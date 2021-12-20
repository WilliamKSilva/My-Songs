import { useEffect, useState } from "react"
import axios from "axios"
import { ITracks } from "../../interfaces/playlists"

interface Response {
   tracks: {
       items: [{
           track: {
                id: string;
                name: string;
           }
       }]
   }
}

export function useMetrics() {
    const access_token = localStorage.getItem('access_token')
    const [ isLoading, setIsLoading ] = useState(true);
    const [ playlistTracks, setPlaylistTracks ] = useState({} as Response);

    useEffect(() => {
        (async function onMetricsLoad() {
            try {                                        
                const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF?si=4ea4d7c421174240',                        
                {                             
                    headers: {                                                            
                        Authorization: 'Bearer ' + access_token
                    },
                }                    
                )                                
                setPlaylistTracks(response.data)                                
                setIsLoading(false);                                        
            } catch(err) {
                console.log(err)
            }
        })()
    }, [isLoading])

    return { playlistTracks, isLoading }
}
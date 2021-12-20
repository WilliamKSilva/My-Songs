import { useEffect, useState } from "react"
import axios from "axios"
import { Playlists } from "../../interfaces/playlists"

export function useMetrics() {
    const access_token = localStorage.getItem('access_token')
    const [ isLoading, setIsLoading ] = useState(true);
    const [ playlistData, setPlaylistData ] = useState({} as Playlists)

    useEffect(() => {
        (async function onMetricsLoad() {
            try {                                        
                const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF?si=efe2202847404365/tracks',                        
                {                             
                    headers: {                                                            
                        Authorization: 'Bearer ' + access_token
                    },
                }                    
                )
                setPlaylistData(response.data)
                console.log(response.data)
                setIsLoading(true);                                        
            } catch(err) {
                console.log(err)
            }
        })()
    }, [isLoading])

    return { playlistData, isLoading }
}
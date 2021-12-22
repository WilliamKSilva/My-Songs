import { useEffect, useState } from "react"
import axios from "axios"
import { IGlobalPlaylist, IUserMetrics } from "../../interfaces/playlists"


export function useMetrics() {
    const access_token = localStorage.getItem('access_token')
        
    const [ playlistTracks, setPlaylistTracks ] = useState({} as IGlobalPlaylist);
    const [metricsData, setMetricsData] = useState({} as IUserMetrics)
    
    const [currentParams, setCurrentParams] = useState('artists');
    const [ isLoading, setIsLoading ] = useState(true);        
    const [fetchingData, setFetchingData] = useState(true)

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
       

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/me/top/${currentParams}`,
                {                             
                    headers: {                                                            
                        Authorization: 'Bearer ' + access_token
                    },
                }     
                )
                                
                setMetricsData(response.data)
                console.log(response.data)                                
                setFetchingData(false)
            } catch(err) {
                console.log(err)
            }
        })()
    }, [currentParams])

    return { playlistTracks, isLoading, metricsData, currentParams, setCurrentParams, fetchingData }
}
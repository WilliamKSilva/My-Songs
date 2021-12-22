interface IGlobalPlaylist {
    tracks: {
        items: [{
            track: {
                 id: string;
                 name: string;
            }
        }]
    }
}

interface IUserMetrics {
    items: [{
        id: string;
        name: string;
        images?: [{
            url: string;
        }]        
    }]
}

export type { IGlobalPlaylist, IUserMetrics };
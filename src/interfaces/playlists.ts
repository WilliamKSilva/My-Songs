interface ITracksItems {
    track: {
        id: string;
        name: string;
    }
}

interface ITracks {
    tracks: ITracksItems[]
}

export type { ITracks };
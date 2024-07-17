export interface SongPick {
    title: string
    artists: string 
    guestName: string
    votes: number
}

export interface Images {
    itemImageSrc: string
    thumbnailImageSrc: string
}

export interface Rsvp {
    firstName: string
    lastName: string
    plusOne: boolean
    comment: string
}
export type PostType = {
    id:number,
    message: string,
    likesCount: number
}

export type ContactsType = {
    github: string
    facebook: string
    twitter: string
    youtube: string
    instagramm: string

}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}
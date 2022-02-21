export interface Image{
    id: string;
    likes: number;
    urls: Url;
    user: User;
    width: number;
    height: number;
    size: string[];
}

export interface SocialLink {
    instagram_username: string;
    twitter_username: string;
}

export interface ProfileImages {
    small: string;
    medium: string;
    large: string;
}

export interface User {
    id: number;
    name: string;
    social: SocialLink
    profile_image: ProfileImages
}

export interface Url {
    small: string;
    medium: string;
    large: string;
}

export interface ModifiedImage {
    src: string,
    width: number,
    height: number,
    urls: Url,
    user: User,
    likes: number
    size:string[]
}
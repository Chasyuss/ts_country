export interface Country{
    name:{
        common: string;
        official: string;
    };
    capital: string;
    flags: {
        png: string;
    };
}
import axios, { AxiosResponse } from "axios";
import { Country } from "../types/Country";

const API = 'https://restcountries.com/v3.1/all';

export const PostCountries = async () : Promise<Country[]>=> {
    try{
        const response : AxiosResponse<Country[]>= await axios.get<Country[]>(API);
        return response.data;
    }catch(error){
        console.error("데이터 불러오기 에러", error);
        throw error;
    }
};
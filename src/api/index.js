import axios from "axios";


const url = 'https://covid19.mathdro.id/api';

export const fetchData = async ()=>{
    try{
        const res = await axios.get(url);
        const { data: { confirmed, recovered, deaths, lastUpdate } } = res;
        return { confirmed, recovered, deaths, lastUpdate } ;
    }catch(err){

    }
}
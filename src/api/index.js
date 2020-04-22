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

export const fetchDailyData = async ()=>{
    try{
        const response = await axios.get(`${url}/daily`)
        const data = response.data.map((data)=>({
            confirmed: data.confirmed.total,
            deaths:data.deaths.total,
            date: data.reportDate
        }))

        return data;
    }catch(err){

    }
}
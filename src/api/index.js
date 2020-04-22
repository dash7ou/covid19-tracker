import axios from "axios";


const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country)=>{
    let URI;
    (country && country.length > 0 ) ? URI=`${url}/countries/${country}` : URI= url;

    try{
        const res = await axios.get(URI);
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

export const fetchCountry = async ()=>{
    try{
        const res = await axios.get(`${url}/countries`);
        return res.data.countries.map(count => count.name)
    }catch(err){

    }
}
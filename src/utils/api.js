import axios from "axios";
const BASE_URL="https://www.googleapis.com/customsearch/v1"

const params={
    key:'AIzaSyCZaeXomh0XKt5bHlX33AxkDodkrJXqr3E',
    cx:'f42284e59b64a4537'
}
export const fetchDataFromApi = async(payload) => {

    const{data} =await axios.get(BASE_URL,{
        params:{...params,...payload}
    }) 
    return data;
};

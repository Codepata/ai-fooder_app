import axios from "axios";
const axiosClint = axios.create({
    baseURL: '',
    headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
}

});

const GetUserByEmail = (email: string) =>axiosClint.get('/user-lists?filters[email][$eq]=' + email);
const CreateNewUser = (data:any) =>axiosClint.post('/user-lists',{data:data});
export default{
    GetUserByEmail,
    CreateNewUser
}

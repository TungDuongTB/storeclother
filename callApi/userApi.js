import api from './apiService';
import jwtDecode from 'jwt-decode';
import AuthToken from '../Component/AuthenToken';

export const createUser = async (email,password)=>{
    try {
        const response = await api.post('/user/createUser',{email:email,password:password});
        return response;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
export const getUser = async () => {
    try {
        const response = await api.get('/user/getUser');
        console.log('API Response:', response.data); // Thêm log để debug
        return response.data;
    } catch (error) {
        console.error('API Error:', error); // Thêm log để debug
        throw error;
    }
}
export const loginUser = async(email,password)=>{
    try {
        const response = await api.post('/user/loginUser',{email:email,password:password})
        .then((response)=>{
            const user_id = jwtDecode(response.data);
            AuthToken.store_token(user_id._id);
        });
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
export const Logout = async ()=>{
    AuthToken.delete_token();
}
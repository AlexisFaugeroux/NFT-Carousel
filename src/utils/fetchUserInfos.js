import axios from 'axios';

export const fetchUserInfos = async (id) => {
    const response = await axios.get(`http://localhost:8000/users/${id}`);
    console.log(response);
    return response.data;
}
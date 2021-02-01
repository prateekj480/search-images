import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qZLdyVgQtBZNT4g-9WlQQ49hEivt-TAAbJTwTmqzHdo'
    }
})
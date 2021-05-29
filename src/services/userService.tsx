import axiosClient from '../../config/axios';

class userService {
    static getUser = async () => {
        try {
            const response = await axiosClient.get('/user/me');
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    static getHistoryUser = async () => {
        try {
            const response = await axiosClient.get('/user/history');
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    static addPoints = async (points: any) => {
        try {
            const response = await axiosClient.post('/user/points', points)
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }    
}

export default userService;

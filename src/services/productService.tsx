import axiosClient from '../../config/axios';

class productService {
    static getProducts = async () => {
        try {
            const response = await axiosClient.get('/products');
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    static redeemProduct = async (product: any) => {
        try {
            const response = await axiosClient.post('/redeem', product)
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default productService

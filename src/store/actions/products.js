import * as types from "../types/products";
import { axiosInstance } from "../../axiosConfig";

export const getProduct = () => (dispatch) => {
    axiosInstance
        .get('/products')
        .then(function(response) {
            console.log(response);
            // setProduct(response.data);
            dispatch({
                type: types.SET_PRODUCTS,
                payload: response.data
                    // console.log();
            })
        })
        .catch(function(error) {
            console.log(error);
        });
};
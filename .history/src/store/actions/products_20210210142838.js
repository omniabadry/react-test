import * as types from "../types/products";
import { axiosInstance} from "../../axiosConfig";

export const setProduct = (dispatch) => {
    axiosInstance
    .get('/products')
        .then(function (response) {
            // console.log(response);
            // setProduct(response.data);
            dispatch({
                type: types.SET_PRODUCTS
            })
    }) 
        .catch(function (error) {
            console.log(error);
        });  
};

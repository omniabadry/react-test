import * as types from "../types/types";
import { axiosInstance} from "../../axiosConfig";

export const setProduct = (dispatch) => {
    axiosInstance.get('/products')    
}

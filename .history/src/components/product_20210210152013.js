import React,{useEffect,useState} from "react";
import { axiosInstance } from "../../axiosConfig";
import { useDispatch } from "react-redux";
import { setProduct } from "../store/actions/products";
import { useSelector , useDispatch } from "module";
 
export default function product() {
    // const [products, setProducts] = useState(null);
    const products= useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setProduct());
    },[]);



    
}


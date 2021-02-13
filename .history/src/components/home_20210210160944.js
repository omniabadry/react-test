import React, { useEffect, useState } from "react";
// import { axiosInstance } from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/actions/products";

export default function Home() {
    // const [products, setProducts] = useState(null);
    // const product = () => {
        const products = useSelector((state) => state.products);
    console.log("selector"+products);
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getProduct())
            console.log("dispatch" + products);
        }, []);

 const producttt = Object.values(products);
    console.log(producttt);
        return (
            <>
                <h1> Products </h1>
            </>
        )
    }


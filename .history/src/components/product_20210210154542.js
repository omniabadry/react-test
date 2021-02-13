import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosConfig";
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


        // const allProducts = Object.values(products)
        // console.log(allProducts)

        // const getProduct = () => {
        //     if (allProducts) {
        //         let productContent = []
        //         for (let index = 0; index < allProducts.length; index++) {
        //             productContent.push(
        //                 <div className="col-3 float-left bg-light m-2" style={{ height: '350px' }}>
        //                     <img className="w-100 h-50" src={allProducts[index]["image"]} />
        //                     <h4 tag="h5">{allProducts[index]["title"]}</h4>
        //                     <p tag="h6" className="mb-2 text-danger">categories: {allProducts[index]["category"]}</p>
        //                     <p>price: {allProducts[index].price}</p>
        //                 </div>
        //             )
        //         }
        //         return productContent
        //     } else {
        //         return (
        //             <h1>loading......</h1>
        //         )
        //     }
        // }
        return (
            <>
            <div>
                <h1>welcome Products </h1>
                <ul>
                    pro
                </ul>
            </div>
            </>
        )
    }


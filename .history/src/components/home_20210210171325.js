
import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import React, { useEffect} from "react";
// import { axiosInstance } from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/actions/products";

export default function Home() {
    // const [products, setProducts] = useState(null);
    // const product = () => {
    // const products = useSelector((state) => state.productReducer.products);
    const products = useSelector((state) => state.productReducer.data);

    console.log("selector"+products);
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getProduct())
            console.log("dispatch" + products);
        }, []);

    // useEffect(() => {
    //     getProduct()
    // }, [searchValue])

    // const handleInput = (event) => {
    //     setSearchValue(event.target.value)
    // }

    const getCards = () => {
        if (products) {
            let cards = []
            for (let index = 0; index < products.length; index++) {
                cards.push(
                    <Card className="col-3">
                        <CardBody>
                            <CardTitle tag="h5">{products[index]["image"]}</CardTitle>
                            <CardSubtitle tag="h6">{products[index]["categories"]}</CardSubtitle>
                            {/* <CardText>{products[index]["volumeInfo"]["authors"]}</CardText> */}
                        </CardBody>
                    </Card>
                )
            }
            return cards
        }
    }

    // const producttt = Object.values(products || {});
    // console.log(producttt);
        return (
            <>
                <div className="container" style={{ textAlign: "center" }}>
                    <input type="text" name="search" id="search" placeholder="Enter book name" />
                    <div className="books col-12">
                        {getCards()}
                    </div>
                </div>            </>
        )
    }


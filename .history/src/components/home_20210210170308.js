
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
    const getCards = () => {
        if (books) {
            let cards = []
            for (let index = 0; index < books.length; index++) {
                cards.push(
                    <Card className="col-3">
                        <CardBody>
                            <CardTitle tag="h5">{books[index]["volumeInfo"]["title"]}</CardTitle>
                            <CardSubtitle tag="h6">{books[index]["volumeInfo"]["categories"]}</CardSubtitle>
                            <CardText>{books[index]["volumeInfo"]["authors"]}</CardText>
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
                <h1> Products </h1>
            </>
        )
    }


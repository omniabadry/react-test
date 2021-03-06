import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { axiosInstance } from "../axiosConfig"
import { useEffect, useState } from 'react';
import "../css/books.css"

export default function Books() {
    const [searchValue, setSearchValue] = useState("")
    const [books, setBooks] = useState()

const getBooks = ()=>{
    axiosInstance.get("", {
        params: {
            q: (searchValue ? searchValue : "keyword")
        }
    }).then((res) => {
        setBooks(res.data.items)
    })
}
    useEffect(() => {
        getBooks()
    }, [searchValue])

    const handleInput = (event) => {
        setSearchValue(event.target.value)
    }
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
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <h1>Book Finder App</h1>
            <input value={searchValue} onChange={handleInput} type="text" name="search" id="search" placeholder="Enter book name" />
            <div className="books col-12">
                {getCards()}
            </div>
        </div>
    )

}
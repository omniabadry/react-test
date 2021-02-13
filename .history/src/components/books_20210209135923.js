import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { axiosInstance } from "../axiosConfig"
import { useEffect, useState } from 'react';

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
    }, [])

    useEffect(() => {
        getBooks()
    }, [searchValue])

    const handleInput = (event) => {
        setSearchValue(event.target.value)
    }
    const getCards = () => {
        if (books) {
            // console.log(books)
            let cards = []
            for (let index = 0; index < books.length; index++) {
                cards.push(
                    books[index]["volumeInfo"]["authors"], books[index]["volumeInfo"]["categories"]
                )
            }
            return cards
        }
    }
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <h3>Book Finder App</h3>
            <input value={searchValue} onChange={handleInput} type="text" name="search" id="search"/>
            <div className="books col-12">
                {getCards()}
            </div>
        </div>
    )}
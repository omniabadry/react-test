import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { setCounter } from "../store/actions";


export default function counter(){
    let c = useSelector((state)=>state.counterReducer.counter);

    const dispatch = useDispatch();

    const increment =()=>{
        dispatch(setCounter(c+1));
    }

    const decrement =()=>{
        dispatch(setCounter(c-1));
    }

    return(
        <>
        <div className="container mt-4 counter">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h3>welcome from counter page</h3>
                    <h3>{c}</h3>
                    <button className="btn btn-danger" onClick={decrement}></button>
                    <button className="btn btn-success" onClick={increment}></button>
                </div>
            </div>
        </div>
        </>
    );
}
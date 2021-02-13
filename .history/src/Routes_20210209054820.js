import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Login = React.lazy(() =>
    import ('./components/login'));
const Books = React.lazy(() =>
    import ("./components/books"));
const ToDo = React.lazy(() =>
    import ("./components/to-do"));

export default function Routes() {
    return ( <
        Suspense fallback = "loading" >
        <
        Switch >
        <
        Route path = "/login"
        exact component = { Login }
        /> <
        Route path = "/Books"
        exact component = { Books }
        /> <
        Route path = "/ToDo"
        exact component = { ToDo }
        /> <
        /Switch> <
        /Suspense>
    );
}
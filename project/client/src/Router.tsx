import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginSuccessState } from "./atoms";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
    const login = useRecoilValue(loginSuccessState);
    localStorage.setItem("Login", JSON.stringify(login));

    if (
        new Date(login.expire).getMinutes() !==
        new Date(Date.now()).getMinutes()
    ) {
        localStorage.clear();
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/login">
                    {login.currentUser ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/register">
                    {login.currentUser ? <Redirect to="/" /> : <Register />}
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

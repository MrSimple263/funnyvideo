import React, { Component } from 'react';
import Header from "./components/Header";
import app from './public/css/app.css'
import ListVideo from "./components/ListVideo";

class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <ListVideo/>
            </div>
        );
    }
}
export default App;

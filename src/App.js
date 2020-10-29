import './App.css';
import React from "react";
import AllUsers from "./components/users/all-users";
import AllPosts from "./components/posts/all-posts";
import AllComments from "./components/comments/all-comments";

function App() {
    const headerStyle = {
        textAlign: 'center',


    }
    return (
        <div  className='container'>
            <h1 style={headerStyle}>Home work lesson2!</h1>
            <hr/>
            <AllUsers/>
            <hr/>
            <AllPosts/>
            <hr/>
            <AllComments/>
        </div>
    );
}

export default App;


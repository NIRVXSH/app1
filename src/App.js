import React from "react"
import {Header,Content,Footer} from './func-components'
import Calendar from "./class-components";
import MsgBox from "./class-props";

function App() {
    return ( 
       <>
        <Header/>
        <MsgBox 
            text="React & React Native"
            color="blue"
            bgColor="#ccc"
            fontSize="18pt"
            border="solid 1px black"
        />
        <p><center><Calendar/></center></p>
        <Content/>
        <Footer/>
       </>
        )
    }
export default App;
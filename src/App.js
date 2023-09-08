import React from "react"
import Banner from "./banner";
import { Calculator2 } from "./calculator";
import { EventData2 } from "./event-data";
import RefsFunc from "./refs-func";
import RefsArray from "./refs-array";
import MessageBox from "./state-func";
import { userContext } from "./context";
import Header from "./context-header";

export default function App(){
    return (
        <userContext.Provider value={'Tom Jerry'}>
            <Header/>
        </userContext.Provider>
        )
};
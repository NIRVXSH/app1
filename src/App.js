import React from "react"
import Banner from "./banner";
import { Calculator2 } from "./calculator";
import { EventData2 } from "./event-data";
import RefsFunc from "./refs-func";
import RefsArray from "./refs-array";
import MessageBox from "./state-func";

export default function App(){
    return ([<RefsFunc/> ,<RefsArray/>,<MessageBox/>])
};
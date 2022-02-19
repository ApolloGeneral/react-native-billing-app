import { registerRootComponent } from "expo";
import React from "react";
import App from "./App";
import { MyProvider } from "./src/context";
const provider=()=>{
    <MyProvider>
        <App></App>
    </MyProvider>
}


registerRootComponent(App);
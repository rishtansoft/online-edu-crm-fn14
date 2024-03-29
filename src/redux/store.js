import { configureStore } from "@reduxjs/toolkit";
import employeeSlicer from "./employeeSlicer";
export const store = configureStore({
    reducer:{
       employees: employeeSlicer
    }
})
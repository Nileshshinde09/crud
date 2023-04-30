import { configureStore} from "@reduxjs/toolkit";
import Reducer from "./reducer";
import listenerMiddleware from "./listner";
import { getNamedMiddlewareRegex } from "next/dist/shared/lib/router/utils/route-regex";
export const store = configureStore({
    reducer:{
        app:Reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})
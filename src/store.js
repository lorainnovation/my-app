import  {createStore } from "redux";
import { applyMiddleware } from "redux";
import createSagaMiddlware from "redux-saga"
import {rootReducer} from "./reducer";
import rootSaga  from './saga'


const sagaMiddleware=createSagaMiddlware();


export const store=createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
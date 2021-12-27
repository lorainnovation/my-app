import {call, put, tekeEvery, takeLatest, all} from 'redux-saga/effects'



function* fetchData(data){

    const AppId="dfef7317" ;
    const Appkey="f8da3a3fecccd64cb347c547107abe75";

    let response=yield fetch(`https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${Appkey}`).then(res=>res.json())
    console.log("response from saga file for getData", response.hits)
    yield put({type:"GETDATA_SUCCESS", data: response.hits})

}

function* fetchDataWatcher(){

    yield takeLatest('GET_DATA', fetchData)
}

export default function* rootSaga(){

    yield all([fetchDataWatcher()])
}
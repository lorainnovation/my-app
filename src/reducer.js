const initialState={

    recipe:[],
    query:""
}

export const rootReducer=(state=initialState, action)=>{
switch(action.type){
case 'GET_DATA' : return {...state, query: action.data}
case 'GETDATA_SUCCESS': return {...state, recipe: action.data}
default : return state
}


}
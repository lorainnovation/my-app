import React, {useState, useEffect} from "react";
import {connect} from "react-redux"
import {store} from "./store"
import * as actions from "./action"

//import './App.css';
import {Recipe} from "./Recipe";



const App=(props) =>{
const [recipes, setRecipes]=useState([]);
const [search, setSearch]=useState("")
const [query, setQuery] =useState("chicken")



const handleSubmit=(e)=>{
e.preventDefault();
setQuery(search)
setSearch("")
}

useEffect(()=>{
props.getStoreData(query)
setRecipes(props.storeRecipe)
console.log("store=======", store.getState())
}, [query, props.storeRecipe])


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text"  value={search} onChange={(e)=> setSearch(e.target.value)} />
        <button type="submit">search</button>
      </form>
      {console.log("rendered from jsx")}

      {recipes.map((recipe, index)=><Recipe key={index}  {...recipe}/>)}
    </div>
    
  );
}


const mapStateToProps=state=>{

return {storeRecipe  : state.recipe}
}


const mapDispatchToProps=(dispatch)=>({
  getStoreData: (data)=>dispatch(actions.getData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);




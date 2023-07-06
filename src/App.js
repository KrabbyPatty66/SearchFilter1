import { useState } from "react";
import"./App.css";
export default function App(){

  const[value, setValue] = useState('');
  const onChange = (event)=>{
    setValue(event.target.value);
  }
  const onSearch = (searchTerm) =>{
    console.log("search",searchTerm);
  }
  return (
<div className="app">
  <h1>SearchFilter</h1>
  <div className="search-container">
    <div className="search-inner">
<input type="text" value={value} onChange = {onChange} />

<button onClick={()=> onSearch(value)}>Search</button>



    </div>
  </div>
</div>




  );
}
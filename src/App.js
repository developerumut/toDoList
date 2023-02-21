import React, {useState} from 'react';
import './App.css'

function App() {
  
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem,
      isCompleted: false,
    };
  function addItem(){
    if(!newItem){
      alert("Please enter an item");
      return;
    }
    
    setItems(oldItems => [...oldItems, item]);
    setNewItem("");
  };
    const deleteItem = (id) => {
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray);
    }

  
    

  return (
    <div className="App">
      <div className='container'>
      <h1>Todo List</h1>

      <input type="text" placeholder='Add an item...' value={newItem} onChange={e => setNewItem(e.target.value)}/>
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map(item=> {
          return(
            <li key={item.id}>{item.value}<button onClick={()=>deleteItem(item.id)}>X</button></li>
          )
        })}
       
      </ul>
      </div>
    </div>
  );
}

export default App;

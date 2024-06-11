import './App.css';
import React,{useState,useEffect} from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [newDescription, setNewDescription] = useState('');
  const [newPrice,setNewPrice] = useState('');
  const [editDescription, setEditDescription] = useState(null);
  const [editPrice, setEditPrice] = useState('');


  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async()=> {
    const response = await fetch('http://localhost:3001/api/getitems');
    const data= await response.json();    
    setItems(data);
  };

  const addItem = async()=>{
    const response = await fetch('http://localhost:3001/api/additem',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }, 
       body: JSON.stringify({
        description : newDescription, 
        price : newPrice})
    })
  };

  return (
    <div className="App">
      <h1>BASIC CRUD ITEMS</h1>
          <div>
              <p>
                <label>Description:</label>
                <input 
                type='text'
                value={newDescription}
                onChange={(e)=> setNewDescription(e.target.value)}
                placeholder=' Enter the description of the item'
                
                />
              </p>
            <p>
            <label>Price: </label>
                <input 
                type='number'
                value={newPrice}
                onChange={(e)=> setNewPrice(e.target.value)}
                placeholder=' Enter the price of the item'
                               
                />
            </p>
            <button onClick={addItem}>ADD ITEM</button>
            <h1>ITEMS</h1>
          </div>
          <div>
            <ul>
              {items.map((item)=>(
                <li key={item.id}>
                  Description: {item.description} - Precio: {item.price}
                </li>
              ))}
            </ul>


          </div>
    </div>
  );
}

export default App;

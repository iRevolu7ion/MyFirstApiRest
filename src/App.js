import './App.css';
import React,{useState,useEffect} from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editDescription, setEditDescription] = useState(null);
  const [editPrice, setEditPrice] = useState('');


  useEffect(() => {
    getItems();
  },[]);

  const getItems = async()=> {
    const response = await fetch('http://localhost:3001/api/getitems');
    const data= await response.json();    
    setItems(data);
  };

  const addItem = async()=>{
    const response = await fetch('http://localhost:3001/api/additem',{
      method:"POST",
      headers:{
        "Content-Type":"application/jason"
      }, 
       body: JSON.stringify({description : editDescription, price : editPrice})
    })
  };

  return (
    <div className="App">
      <header className="App-header">
     

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

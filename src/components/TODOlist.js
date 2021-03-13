import React,{useState} from 'react';
import './Todo.css';

const TODOlist = () => {
    const [arr, setArr] = useState([]);
    const [inp, setInp] = useState("");
    const handleChange=(e)=>{
        
            setInp(e.target.value);
       
    }

    const handleSubmit=(event)=>{
        if(inp!==""){
       // arr.push(inp);
        
        setArr( arr => [...arr, inp]); } 
        event.preventDefault();
        console.log(handleSubmit);
        setInp("");
    
    }
   
    const handleDelete = (index) => {
    //alert(index)
      var newlist=arr;
      newlist.splice(index,1);
      setArr([...newlist]);
        }

  
    const element = arr.map((number,index) =>
    <li className="todotask" key={index}  >{number}<button  className="removeButton" onClick={() => handleDelete(index)}><i class="fas fa-trash-alt"></i></button></li>)
   
    

    return (
        <div>
            <h1 className="heading">TODOLIST</h1>
        <form className="userinputfield">
          <input className="textField" type="text" value={inp} placeholder="Enter the text.." onChange={handleChange}/>
          <input className="submitbutton" type="submit" value="ADD"  onClick={handleSubmit} />
          
          {/* {JSON.stringify(arr)}  */}
          </form> 
          <div>{element}</div> 
           
        </div>
    );
};

export default TODOlist;
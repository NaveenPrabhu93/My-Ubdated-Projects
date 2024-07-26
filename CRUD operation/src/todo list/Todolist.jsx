import React,{useState} from "react";
import { FaTrash } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';


function Todo()
{
    const [text, settext]=useState("");
    const [list, setlist]=useState([]);
    const [editIndex, setEditIndex] = useState(null);
        
    const handleChange = (event) => {
        settext(event.target.value);
      };
    
      const ad = (event) => {
        event.preventDefault();
        if (!text.trim()) return; // Prevent adding empty todo
    
        if (editIndex !== null) {
          // If editIndex is not null, update the existing todo
          const updatedlist = list.map((list, index) =>
            index === editIndex ? text : list
          );
          setlist(updatedlist);
          setEditIndex(null);
        } else {
          // Otherwise, add a new todo
          setlist([...list, text]);
        }
    
        settext('');
      };
    
      const handleEdit = (index) => {
        // Set editIndex to the index of the todo being edited
        settext(list[index]);
        setEditIndex(index);
      };
    
    function del (index)
    {
        const newlist = [...list,];
        newlist.splice(index,1);
        setlist(newlist);
    }

    return(
        <>
        <br></br><br></br><br></br>
        <div className="main1">
            
            <h3>TO DO LIST</h3>
            <div className="input-div">
            <input type="text" value={text}  onChange={handleChange}></input>&nbsp;&nbsp;
            <Button variant="primary" onClick={ad} className="button">ADD</Button>{' '}
            </div>
            <br></br>

            <div className="main2">
                <div>
            <table>
                {list.map((item, index) => (     
                <tr key={index} >
                <th>&nbsp;&nbsp;&nbsp;&nbsp;{index+1}</th>   
                <th>&nbsp;&nbsp;&nbsp;&nbsp;{item}  </th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=> del(index)}><FaTrash/></button></th> 
                <th><button onClick={() => handleEdit(index)}>Ed</button></th>
                  
                <br></br>
                </tr>    
                
                ))
                }
            </table>  
            </div>          
            </div>
         </div> 
         </>  
             
       
    )
}
export default Todo
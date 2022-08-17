import {useReducer, useRef} from "react";
import reducer,{initState} from './reducer'
import {addJob, deleteJob, setJob} from "./actions";





// function App() {
//   const [count,setCount]=useState(0)
//
//   const Increase=useCallback(
//       ()=>{
//           setCount(count+1)
//       },[]
//   )
//
//
//import { applyMiddleware } from "redux";

//   return (
//     <div className="App">
//         <Content onCrease={Increase} />
//       <h1>{count}</h1>
//     </div>
//   );
// }

// function App() {
//     const [name,setName]=useState('')
//     const [price,setPrice]=useState('')
//     const [products,setProducts]=useState([])
//     const nameRef=useRef()
//
//     const handleSubmit=()=>{
//         setProducts(prev=>[
//             ...prev,
//             {name:name,price:+price}
//         ])
//
//         setName('')
//         setPrice('')
//         nameRef.current.focus()
//     }
//
//     const total=products.reduce((total,product)=>{return total+product.price},0)
//
//     return (
//         <div>
//             <input
//                 ref={nameRef}
//                 value={name}
//                 onChange={e=>setName(e.target.value)}/>
//             <br/>
//             <input  value={price} onChange={e=>setPrice(e.target.value)} />
//             <br/>
//             <button onClick={handleSubmit}>Add</button>
//             <br/>
//             Total:{total}
//
//                 {products.map((product,index)=>(
//                     <ul key={index} >
//                         <li>{product.name}--
//                        {product.price}</li>
//                     </ul>
//                 ))}
//         </div>
//     )
// }


//useState vs useReducer


function Todo() {

    const [state, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = state

    const inputRef = useRef()

    const handleAdd = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    const Delete = index => {
        dispatch(deleteJob(index))
    }


    return (
        <div className="wrapper">
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="enter todo..."
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={()=>Delete(index)}>  &times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;

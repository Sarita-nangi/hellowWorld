

// const Greeting = (props)=>{
//     const {name}=props
//     return (
//         <li>
//              <h1>hellow {name}</h1>
//         </li>
       
        
//     )
// }
import {Component} from "react"




class MyComponent extends Component {
       state ={count:0}
       onIncrease=()=>{
        this.setState((prestate)=>{
            return {count:prestate.count+1}

        })
       }
       onDecrease=()=>{
        this.setState((prestate)=>{
            return {count:prestate.count-1
            }

        })
       }
   
      render(){
        const {count}=this.state
        return (
            <div>
            <h1>counter</h1> 
            <p>{count}</p> 
           
             <div>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>
             </div>
            </div>        
             )
       
      }

      
       
   
}

export default MyComponent
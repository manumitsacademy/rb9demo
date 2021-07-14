import React from 'react';
class Mainarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:['angularcontent','daywise schedule','ifelse video'],
            task:''
        }
    }
    addTask=()=>{
        this.setState({todos:[...this.state.todos,this.state.task]})
    }
    render() { 
        return (
            <div className="w-100 bg-success">
                <input type="text" onChange={(e)=>{this.setState({task:e.target.value})}}></input>
                <button onClick={this.addTask}>Add Task</button>
                <ul>
                    {
                        this.state.todos.map((t,i)=>{
                            return(
                                <li>{t}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Mainarea;
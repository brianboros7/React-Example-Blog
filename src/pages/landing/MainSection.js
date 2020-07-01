import React from 'react'; 

// import VideoAPI from './component/VideoAPI'; 
import ToDoApp from '../landing/todo-app/ToDoApp'; 

class MainSection extends React.Component {
    

    render() {    

        return (  
            <div>
                <div> 
                    <h3>Test </h3>
                </div> 

                <div> 
                    <ToDoApp /> 
                </div> 
            </div>
        )
    }
}
export default MainSection; 
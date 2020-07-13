import React from 'react'; 

import VideoAPI from './../../components/VideoAPI'; 
import ToDoApp from '../landing/todo-app/ToDoApp'; 
//import PractiseES6 from './../../components/PractiseES6'; 

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

            
                <div>
                    <VideoAPI /> 
                </div> 
            </div>            
        )
    }
}

export default MainSection; 
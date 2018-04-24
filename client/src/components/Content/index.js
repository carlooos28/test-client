// Dependecies
import { Component } from 'react';

// Components
import Sidebar from '../Sidebar';
import InformationHotel from '../InformationHotel';


// Css
import './styles.css';

class Content extends Component {

  render() {
    
    return (
      <div className="Content">
        <div className="row"> 
            <div className="col-4"> 
                <Sidebar />        
            </div>
            <div className="col-8">
              <InformationHotel />
            </div>      
        </div>      
      </div>
    );
  }
}

export default Content;

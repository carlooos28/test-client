// Dependecies
import { Component } from 'react';

// Css
import './styles.css';

class InformationHotel extends Component {
  render() {
    return (
        <div className="Information-hotel row">      
            <div className="col"> 
                name
                <img  />     
            </div>    
            <div className="col">
                price
                {console.log(this.props.hotels)}
            </div>                
        </div>
    );
  }
}

export default InformationHotel;

// Dependecies
import { Component } from 'react';

// Components
import Sidebar from '../Sidebar';
import InformationHotel from '../InformationHotel';

// Css
import './styles.css';

class Content extends Component {
  
  render() {
    let hotels = this.props.hotels;    

    return (
      <div className="Content">
        <div className="row"> 
            <div className="col-3"> 
                <Sidebar />        
            </div>
            <div className="col-9">                
            {
                hotels.map((hotel) => {
                    return (
                            <InformationHotel 
                                key={hotel.id} 
                                {...hotel} 
                            />
                           )
                })
            }                
            </div>      
        </div>      
      </div>
    );
  }
}

export default Content;
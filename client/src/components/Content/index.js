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

    console.log(hotels)

    return (
      <div className="Content">
        <div className="row"> 
            <div className="col-4"> 
                <Sidebar />        
            </div>
            <div className="col-8">                
            {
                hotels.map(hotel => {
                    return <InformationHotel key={hotel.id} />
                })
            }                
            </div>      
        </div>      
      </div>
    );
  }
}

export default Content;
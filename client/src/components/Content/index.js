// Dependecies
import { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Components
import Sidebar from '../Sidebar';
import HotelInformation from '../HotelInformation';

// Css
import './styles.css';

class Content extends Component {
  
  render() {
    let hotels = this.props.hotels;    

    return (
      <div className="Content">
        <Row> 
            <Col lg="3"> 
                <Sidebar />        
            </Col>
            <Col lg="9"> 
            {
                hotels.map((hotel) => {
                    return (
                            <HotelInformation 
                                key={hotel.id} 
                                {...hotel} 
                            />
                           )
                })
            }                
            </Col>      
        </Row>       
      </div>
    );
  }
}

export default Content;
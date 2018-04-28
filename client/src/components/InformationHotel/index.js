// Dependecies
import { Component } from 'react';

// Components
import Stars from './stars';

// Css
import './styles.css';

class InformationHotel extends Component {

    getAmenities(){
        let amenities = this.props.amenities,
            data      = [];

        amenities.map((name, index) => {
            data.push(<img className="Amenities" key={index} src={`icons/amenities/${name}.svg`} />);       
                    
        })

        return (
            <div>{data}</div>
        );

    }
    getStars(){
        let stars = this.props.stars,
            data  = [];

        for (var item = 0; item < stars; item++) {
            data.push(<img className="Star" key={item} src={`icons/filters/star.svg`} />);
        }

        return (
            <div>{data}</div>
        ); 
    }
    render() {
        let hotel     = this.props,
            stars     = this.getStars(),
            amenities = this.getAmenities();

        return (
            <div className="Information-hotel row">      
                <div className="col-4">                     
                    <img className="Hotel-image" src={`images/hotels/${hotel.image}`}/>             
                </div>    
                <div className="col-5">                    
                    {hotel.name}               
                    {stars}     
                    {amenities}                               
                </div>                        
                <div className="col-3"> 
                    <div>
                        Precio por noche por habitación
                    </div>
                    <div>
                        ARS {hotel.price}
                    </div>
                    <div>
                        <button>
                            Ver Hotel
                        </button>
                    </div>

                </div>                
            </div>                            
        );
    }
}

export default InformationHotel;

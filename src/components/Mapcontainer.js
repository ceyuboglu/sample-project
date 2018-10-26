import React, {Component} from 'react';
import {connect} from "react-redux";
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import { RotateLoader } from 'react-spinners';

class Mapcontainer extends Component {
    render() {
        const locations = [];
        const { selectedusers, users } = this.props.users;
        // eslint-disable-next-line
        selectedusers.map((selecteduser) => {
            const location = users.filter(user => user.id === selecteduser)[0].address.geo;
            locations.push({ lat:Number(location.lat), lng:Number(location.lng)});
        });
        const MyMapComponent = withScriptjs(withGoogleMap(() =>
            <GoogleMap
                defaultZoom={2}
                defaultCenter={{ lat: 39.9334, lng: 32.8597 }}>
                {locations.map((coordinate) =>
                    <Marker position={coordinate} key={coordinate.lat}/>
                )}
            </GoogleMap>
        ));
        return (
            <div className='Mapcontainer'>
                <h2 style={{height:'8%'}}>User Locations</h2>
                {this.props.users.fetched === false
                    ? <RotateLoader
                         sizeUnit={"px"}
                         size={20}
                         color={'#7fcf00'}/>
                    : <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://www.google.com/maps/embed/v1/search?key=AIzaSyDl4s_67Zgl_7w8AjH536FYyc0TmnZknPQ&q=record+stores+in+Seattle"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `85%`,display:`inline-block`,width:`100%`}} />}
                        mapElement={<div style={{ height: `100% ` }} />}/>

                }
            </div>
        );
    }
}
const mapStateToProps = ({users}) => {
    return{
        users
    }
};
export default connect(mapStateToProps)(Mapcontainer);

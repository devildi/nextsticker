import React from 'react'
import { connect } from 'react-redux'
//import { actionCreators } from './store'
const { compose, withProps} = require("recompose")
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} = require("react-google-maps")

//import MarkerMe from './Markers'

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?sensor=false&key=AIzaSyAJHnZaO6czTIkkftjQNdtNcjL52pMxsIY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={props.center}
    center={props.center}
  >	
		<Marker 
			position={props.whereAmI}
			icon={new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                                                      new google.maps.Size(22,22),
                                                      new google.maps.Point(0,18),
                                                      new google.maps.Point(11,11))} 
		/>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
)

class Google extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <MyMapComponent
      	center={{ lat: -34.397, lng: 150.644 }}
        points={{ lat: -34.397, lng: 150.644 }}
      />
    )
  }
}

// const mapState = ({indexReducer}) => {
//   return {
//     data: indexReducer.text
//   } 
// }

// const mapDispatch = (dispatch) => {
//   return {
//     test(){
//       dispatch(actionCreators.test(1))
//     },
//   }
// }

export default connect(null, null)(Google)
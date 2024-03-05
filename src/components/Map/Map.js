import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ coords, setCoords, setBounds, places, setChildClicked }) => {
  const coordinates = { lat: 0, lng: 0 }
  return (
    <div className="map">
      <div className='w-100 h-100'>
        <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBKF6cUry8MPrRSkk5HQP1lWUYk8_yE9uo' }}
          defaultCenter={coords}
          center={coords}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            setCoords({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }}
          onChildClick={(child) => {
            setChildClicked(child)
          }}
        >

          {/* <div className='asda'>salam</div> */}

          {places?.data?.map((place, i) =>
          (
            <div className='map-place' lat={place.latitude} lng={place.longitude} key={i}>

              <div className="name">{place.name}</div>
              <div className="img">
                <img className="card-img-top place-img" src={place.photo ? place.photo.images.small.url : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'} alt={place.name} />
              </div>
              <div className="rating">{place.rating && [...Array(Math.round(Number(place.rating)))].map((_, index) => (
                <i key={index} className="fa-solid fa-star" style={{ color: "orange" }}></i>
              ))}</div>
            </div>
          )
          )}

        </GoogleMapReact>
      </div>
    </div>

  )
}

export default Map

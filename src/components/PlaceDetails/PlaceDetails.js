import React from 'react'

const PlaceDetails = ({ place }) => {
  console.log(place);

  const Rating = () => {
    return <i class="fa-solid fa-star"></i>
  }



  return (
    // <div className='place-detail card'>
    //   {place.name}
    // </div>
    <div className="card place-details my-4" style={{ width: "18rem;" }}>
      <img className="card-img-top place-img" src={place.photo ? place.photo.images.medium.url : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'} alt={place.name} />
      <div className="card-body">
        <h5 className="card-title">{place.name}</h5>
        <div className="rating">
          {place.rating && [...Array(Math.round(Number(place.rating)))].map((_, index) => (
            <i key={index} className="fa-solid fa-star" style={{ color: "orange" }}></i>
          ))}
        </div>
        <div className="cuisine d-flex ">
          {
            place?.cuisine?.map(({name}) => {
              return <span className='my-2 me-2' key={name}>{name}</span>
            })
          }

        </div>
        <p className="card-text my-2"><i class="fa-solid fa-location-dot me-1"></i> {place.address}</p>
        <p className="card-text my-2"><i class="fa-solid fa-phone me-1"></i> {place.phone}</p>
        

        <div className='d-flex justify-content-between align-items-center'>
          <a href={place.web_url} target='_blank' className="btn ps-0">Trip Advisor</a>
          <a href={place.website} target='_blank' className="btn">Website</a>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetails

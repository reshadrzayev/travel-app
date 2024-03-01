import React from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import Loader from '../Loader/Loader'
import { useState } from 'react'

const List = ({ places }) => {

  return (
    <div className="menulist">
      <div className='list-main w-100'>
        {
          places?.map((data, i) => {
            return (
              <PlaceDetails key={i} place={data}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default List

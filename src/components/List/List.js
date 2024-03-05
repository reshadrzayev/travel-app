import React, {useEffect,createRef} from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import Loader from '../Loader/Loader'
import { useState } from 'react'

const List = ({ places, childClicked }) => {


  const [elRefs,setElRefs] = useState([])

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_,i)=>elRefs[i] || createRef())
    setElRefs(refs)
  }, [places]);

  return (
    <div className="menulist">
      <div className='list-main w-100'>
        {
          places?.map((data, i) => {
            return (
              <div ref={elRefs[i]}>
              <PlaceDetails key={i} place={data}
                selected={Number(childClicked) === i}
                refProp = {elRefs[i]}
              />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List

import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlaceDetails = async(ne,sw,setVisible,setError) =>{
    try {
        setVisible(true)
        const response = await axios.get(URL,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          })
          setVisible(false)
          return response.data
    } catch (error) {
        // console.log(error);
        setVisible(false)
        setError({message:'APİ-yə sorğu zamanı xəta baş vermişdir.', status:true})
    }
}
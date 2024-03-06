import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { useState, useEffect } from "react";
import { getPlaceDetails } from "./api";
import Loader from "./components/Loader/Loader";
import AlertError from "./components/Alert/AlertError";


function App() {

    const [places, setPlaces] = useState()

    const [coords, setCoords] = useState({})
    const [bounds, setBounds] = useState({})
    const [visible, setVisible] = useState(true)

    const [error, setError] = useState({ message: '', status: false })

    const [childClicked,setChildClicked] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((data) => {
            setCoords({ lat: data.coords.latitude, lng: data.coords.longitude })
        })
    }, [])

    useEffect(() => {
   
        getPlaceDetails(bounds?.ne, bounds?.sw, setVisible, setError).then((data) => {
            setPlaces(data)
        })
    }, [coords, bounds])

    return (
        <>
            <Header />
            <div className="container-fluid w-100 py-4">

                <div className="row d-flex">
                    <div className="col-xl-3 col-md-12 col-12">
                        {visible == true ? <Loader /> : <List places={places?.data} childClicked={childClicked}/>}
                    </div>
                    <div className="col-xl-9 col-md-12 col-12">
                        <Map setChildClicked={setChildClicked} coords={coords} setCoords={setCoords} setBounds={setBounds} places={places}/>
                    </div>
                </div>

                {/* {
                    error == false ? <div className="row d-flex">
                        <div className="col-xl-2 col-md-3 col-4">
                            {visible == true ? <Loader /> : <List places={places?.data} />}
                        </div>
                        <div className="col-xl-10 col-md-9 col-8">
                            <Map coords={coords} setCoords={setCoords} setBounds={setBounds} />
                        </div>
                    </div> : <AlertError error={error} />
                } */}
            </div>
        </>
    );
}

export default App;


import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';


const polyline:[number, number][] = [
    [49.2856, -123.1115],
    [49.2825, -123.1186],
    [49.2795, -123.1198],
    [49.2745, -123.1219],
    [49.2665, -123.1156],
    [49.2628, -123.1145],
    [49.2492, -123.1159],
    [49.2332, -123.1166],
    [49.2263, -123.1161],
    [49.2097, -123.1170],
    [49.1955, -123.1261],
    [49.1967, -123.1463],
    [49.1930, -123.1579],
    [49.1942, -123.1783],
    [49.1930, -123.1579],
    [49.1967, -123.1463],
    [49.1955, -123.1261],
    [49.1840, -123.1364],
    [49.1748, -123.1364],
    [49.1681, -123.1363],
    

]

const multiPolyline:[number, number][][] = [
[
    [49.2856, -123.1115],
    [49.2825, -123.1186],
    [49.2795, -123.1198],
    [49.2745, -123.1219],
    [49.2665, -123.1156],
    [49.2628, -123.1145],
    [49.2492, -123.1159],
    [49.2332, -123.1166],
    [49.2263, -123.1161],
    [49.2097, -123.1170],
    [49.1955, -123.1261],
    [49.1967, -123.1463],
    [49.1930, -123.1579],
    [49.1942, -123.1783],
    
],
[

]
]




const redOptions = { color: "red" }
const orangeOptions = { color: "orange" }
const fillBlueOptions = { color: "blue" }

const center:[number, number] = [49.25299, -123.00600];

const Map = () => {
    return(
        <div>
        <header 
        style={{ 
            textAlign: 'center',  
            backgroundColor: 'black', 
            padding: '13px' }}>

           <h1>Canada Line - Week 1 Example</h1>
        </header>
            
        <MapContainer
        style= {{height: "100vh"}}
        center={[49.24966, -123.00934]} zoom={13} scrollWheelZoom={false}
        >
            <TileLayer
            attribution='&copy; <a href="https://github.com/JacobSkilling-dot/week1-example-mapv2.git">'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        
            <Polyline pathOptions={redOptions} positions={polyline}/>
            <Polyline pathOptions={fillBlueOptions} positions={multiPolyline}/>

            <Circle center={center} pathOptions={fillBlueOptions} radius={10}/>

            <CircleMarker center={[49.2856, -123.1115]} pathOptions={redOptions} radius={5}>
                <Popup>Waterfront</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2825, -123.1186]} pathOptions={redOptions} radius={5}>
                <Popup>Vancouver City Center</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2745, -123.1219]} pathOptions={redOptions} radius={5}>
                <Popup>Yaletown-Roadhouse</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2665, -123.1156]} pathOptions={redOptions} radius={5}>
                <Popup>Olympic Village</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2628, -123.1145]} pathOptions={redOptions} radius={5}>
                <Popup>Broadway City Hall</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2492, -123.1159]} pathOptions={redOptions} radius={5}>
                <Popup>King Edward</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2332, -123.1166]} pathOptions={redOptions} radius={5}>
                <Popup>Oakridge-41st Ave</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2263, -123.1161]} pathOptions={redOptions} radius={5}>
                <Popup>Langara-49th Avenue</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2097, -123.1170]} pathOptions={redOptions} radius={5}>
                <Popup>Marine Drive</Popup>
            </CircleMarker>

            <CircleMarker center={[49.1955, -123.1261]} pathOptions={redOptions} radius={5}>
                <Popup>Bridgeport</Popup>
            </CircleMarker>

            <CircleMarker center={[49.1967, -123.1463]} pathOptions={redOptions} radius={5}>
                <Popup>Templeton</Popup>
            </CircleMarker>

            <CircleMarker center={[49.1930, -123.1579]} pathOptions={redOptions} radius={5}>
                <Popup>Sea Island</Popup>
            </CircleMarker>

            <CircleMarker center={[49.1942, -123.1783]} pathOptions={redOptions} radius={5}>
                <Popup>YVR</Popup>
            </CircleMarker>

            <CircleMarker center={[49.1840, -123.1364]} pathOptions={redOptions} radius={5}>
                <Popup>Aberdeen</Popup>
            </CircleMarker>

            <CircleMarker center={[49.1748, -123.1364]} pathOptions={redOptions} radius={5}>
                <Popup>Lansdowne</Popup>
            </CircleMarker>
            
            <CircleMarker center={[49.1681, -123.1363]} pathOptions={redOptions} radius={5}>
                <Popup>Richmond-Brighouse</Popup>
            </CircleMarker>
        </MapContainer>
            </div>

    )
}

export default Map;

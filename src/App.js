import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './App.css';
function App() {
  return (
    <MapContainer center={[22.051377, 88.069526]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="..."
      />
      <Marker position={[22.051377, 88.069526]}>
        <Popup>
          P1 Hostel
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;

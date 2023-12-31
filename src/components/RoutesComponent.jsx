import { Routes, Route } from "react-router-dom";
import HomeScreen from'../screens/HomeScreen';
import PlanetScreen from'../screens/PlanetScreen';

export default ()=> (
  <main>
    <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/planets/:id" element={<PlanetScreen />} /> 
    </Routes>
  </main>
);
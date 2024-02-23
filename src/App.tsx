import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./component/Navigation";
import {MainPage} from "./pages/MainPage";
import {TripsPage} from "./pages/FavPage";

function App() {
   return (
       <>
          <Navigation />
          <Routes>
             <Route path="/" element={ <MainPage /> } />
             <Route path="/trip" element={ <TripsPage /> } />
          </Routes>
       </>

   );
}

export default App;

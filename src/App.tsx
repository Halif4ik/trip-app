import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./component/Navigation";
import {MainPage} from "./pages/MainPage";
import {FavouritesPage} from "./pages/FavPage";

function App() {
   return (
       <>
          <Navigation />
          <Routes>
             <Route path="/" element={ <MainPage /> } />
             <Route path="/favourites" element={ <FavouritesPage /> } />
          </Routes>
       </>

   );
}

export default App;

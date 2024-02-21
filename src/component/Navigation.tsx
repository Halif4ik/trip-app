import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
   return (
       <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-blue-700 text-white">
          <h3 className="font-bold">Trip app</h3>
          <span className="min-w-44 flex justify-between">
            <Link to="/" className="mr-2">Main</Link>
            <Link to="/favourites">Favourites</Link>
      </span>
       </nav>
   )
}
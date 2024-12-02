import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const counter=useSelector(state=>state.count)
    console.log(counter

    )
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <h2>Logo</h2>

                <button className=' ms-auto btn btn-secondary '>Count:{counter}</button>
                    


        </nav>
    </div>
  )
}

export default Navbar
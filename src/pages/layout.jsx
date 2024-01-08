import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
export default function layout() {
  return (
    <>
    <Navbar id="sticky-banner" tabIndex="-1" className="fixed top-0 start-0  bg-yellow-100 h-[4rem] pt-[1rem]">
        <div className='flex gap-2 justify-evenly w-screen  gap-4 '>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Use">Use</Link>
        </div>
      </Navbar>
     
      <Outlet/>
    </>
  )
}

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <h2>First News Page</h2>
    <Link style={{fontSize:'2cap' , color:'black' , textDecoration:'none'}} href='/'>Home -</Link>
    </>
  )
}

export default page
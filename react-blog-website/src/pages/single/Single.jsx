import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import "./single.css"

export default function Single(props) {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}
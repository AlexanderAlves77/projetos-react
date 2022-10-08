import React from 'react'
import "./singlePost.css"

export default function SinglePost(props) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Alexander</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Numquam sunt quisquam perferendis error illo adipisci velit, 
          dolorem maxime quod impedit ullam possimus exercitationem 
          atque alias temporibus blanditiis commodi rerum ipsam?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Numquam sunt quisquam perferendis error illo adipisci velit, 
          dolorem maxime quod impedit ullam possimus exercitationem 
          atque alias temporibus blanditiis commodi rerum ipsam?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Numquam sunt quisquam perferendis error illo adipisci velit, 
          dolorem maxime quod impedit ullam possimus exercitationem 
          atque alias temporibus blanditiis commodi rerum ipsam?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Numquam sunt quisquam perferendis error illo adipisci velit, 
          dolorem maxime quod impedit ullam possimus exercitationem 
          atque alias temporibus blanditiis commodi rerum ipsam?
        </p>
      </div>
    </div>
  )
}
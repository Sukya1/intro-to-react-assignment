import React from "react"

function UserProfile(props) { 
  return (
    <>
    <p>
      {props.name}
      {props.email}
      {props.imgURL}
    </p>
    </>
  )
}
export default UserProfile
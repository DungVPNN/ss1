import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function page() {
  return (
    <>Danh sách icon
    <div>
      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faSearch}></FontAwesomeIcon>
      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faUser}></FontAwesomeIcon>
      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faHome}></FontAwesomeIcon>
    </div>
    </>
  )
}
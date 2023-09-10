import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './Map.css'

function Map() {
  return (
    <>
        <div className='map-container'>

            <div className='container'>
                <h1 className='map-text'>No. 29 Mekenge Layout (Elegance Edim Street) Off Marian Road, Calabar, Cross-River State, Nigeria.</h1>
                            <FaIcons.FaSearchLocation className='icon'/>
   <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=29%20Mekenge%20Layout%20(Elegance%20Edim%20Street)%20Off%20Marian%20Road,%20Calabar,%20Cross-River%20State,%20Nigeria.+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
            </div>
        </div>
    </>
  )
}

export default Map
import React, {useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export const Contact = () => {
    // maps code 
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCRfbqC9p5BwgASKvPmhi9kj9HseMMhwWA'
      })
      const center = useMemo(() => ({lat: 25.28337413723937, lng: 55.38785676808126}), [])
      if (!isLoaded) return <div>Loading...</div>;
      if (loadError) return 'Error loading maps';
      const containerStyle = {
        width: '50vw',
        height: '50vh'
      }; 

    //   return 
      return (
        <div className='sm:pt-20 pt-14  bg-slate-50 tracking-wider '>
          <div className='w-full sm:mt-5 p-7 sm:p-10 bg-brown-5 flex flex-col items-center'>
            <h2 className='text-slate-50 text-3xl'> Contact us</h2>
          </div>
          <div className='flex flex-wrap justify-around px-10 py-5 sm:py-24' >
            <div className='mx-16' >
                <p className='mt-5' >
                    <span className='text-brown-4 ' >Phone: </span> <br />
                     +971 50 454 9651 <br />
                     +971 56 403 3206
                </p>
                <p className='mt-10'>
                    <span className='text-brown-4 '>E-mail:</span> <br />
                    abdulganichoudhury@yahoo.com
                </p>
                <p className='mt-10 mb-10'>
                    <span className='text-brown-4 '>Address:</span> <br />
                    279 damascus street, <br />
                    Al Qusais Industrial Area 1, <br />
                    Dubai, <br />
                    United Arab Emirates
                </p>
            </div>
              <GoogleMap 
              zoom={15} 
              center={center}
               mapContainerStyle={containerStyle}
               >
                <Marker key={1} id='1' position={{lat: 25.28337413723937, lng: 55.38785676808126}} />
              </GoogleMap>
          </div>
        </div>
        
  )
}
        


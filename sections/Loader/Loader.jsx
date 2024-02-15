import React, {useEffect} from 'react'
import { GridLoader } from 'react-spinners'
import './Loader.css'

function Loader() {

  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';

    // Enable scrolling again when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='loader'>
      <GridLoader color="#f79f1e" size={50} />
    </div>
  )
}

export default Loader

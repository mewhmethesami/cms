import React from 'react'
import './Features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function Features() {
  return (
    <div className='features'>
      <div className='featureItem'>
        <span className='featureTitle'>Revanue</span>
        <div className='featureContainer'>
            <span className='featureMoney'>$2.415</span>
            <span className='featuresRate'>
                -11.4<ArrowDownwardIcon className='featureIcon negative'/>
            </span>
        </div>
        <span className='featureSub'>Compared to last mounth</span>
      </div>
      <div className='featureItem'>
        <span className='featureTitle'>Sales</span>
        <div className='featureContainer'>
            <span className='featureMoney'>$2.415</span>
            <span className='featuresRate'>
                -1.4<ArrowDownwardIcon className='featureIcon negative'/>
            </span>
        </div>
        <span className='featureSub'>Compared to last mounth</span>
      </div>
      <div className='featureItem'>
        <span className='featureTitle'>Cost</span>
        <div className='featureContainer'>
            <span className='featureMoney'>$2.415</span>
            <span className='featuresRate'>
               +2.4 <ArrowDownwardIcon className='featureIcon negative'/>
            </span>
        </div>
        <span className='featureSub'>Compared to last mounth</span>
      </div>
    </div>
  )
}

export default Features

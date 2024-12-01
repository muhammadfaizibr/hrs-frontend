import React, { useEffect, useContext } from 'react'
import WeatherDetailsCard from '../components/WeatherDetailsCard'
import '../assets/css/WeatherStyles.css'
import { ProgressContext } from '../contexts/ProgressContext'

const Weather = () => {
  const setProgress = useContext(ProgressContext);

  useEffect(() => {
   setProgress(100); 
  }, [setProgress]);

  return (
    <section className='weather'>
        <h2>Weather Updates</h2>
        <div className='weather-details-wrapper'>
        <WeatherDetailsCard/>
        <WeatherDetailsCard/>
        <WeatherDetailsCard/>
        </div>
    </section>
  )
}

export default Weather
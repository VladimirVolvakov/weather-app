// Styles:
import './CurrentWeather.styles.css';

const CurrentWeather = () => {
  return (
    <div className='current-weather'>
      <div className="top">
        <p className='city'>Belgrade</p>
        <p className='weather-description'>Sunny</p>
      </div>
      <img className='weather-icon' src='...' alt='Weather' />
    </div>
  );
};

export default CurrentWeather;
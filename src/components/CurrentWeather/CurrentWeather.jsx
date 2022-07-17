// Styles:
import './CurrentWeather.styles.css';
// Image:
import WeatherIcon from '../../assets/icons/01d.png';

const CurrentWeather = () => {
  return (
    <div className='current-weather'>
      <div className="top">
        <p className='city'>Belgrade</p>
        <p className='weather-description'>Sunny</p>
      </div>
      <img className='weather-icon' src={WeatherIcon} alt='Weather' />
    </div>
  );
};

export default CurrentWeather;
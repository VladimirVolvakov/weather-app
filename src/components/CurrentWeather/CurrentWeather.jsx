// Styles:
import './CurrentWeather.css';
// Image:
import WeatherIcon from '../../assets/icons/01d.png';

const CurrentWeather = () => {
  return (
    <div className='current-weather-card'>
      <div className='card-top-part'>
        <div>
          <p className='city'>Donetsk</p>
          <p className='weather-description'>Sunny</p>
        </div>
        <img className='weather-icon' src={WeatherIcon} alt='Weather' />
      </div>
      <div className='card-bottom-part'>
        <p className='temperature'>18°C</p>
        <div className='weather-detailed'>
          <div className='parameter-row'>
            <span className='parameter-label parameter-label__heading'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>18 °C</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>20 %</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>1013 mbar</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>5 m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
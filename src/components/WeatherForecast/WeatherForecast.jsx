// Styles:
import "./WeatherForecast.css";
// Helper UI elements:
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WeatherForecast = ({ weatherForecastData }) => {
  // Get current day of week:
  const dayOfWeek = new Date().getDay();
  // Get array of week days for next 7 days:
  const weekdaysForForecast = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfWeek));

  console.log(weatherForecastData);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        { weatherForecastData.list.splice(0, 7).map((dailyForecast, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-forecast">
                  <img className="icon-small" src={`icons/${dailyForecast.weather[0].icon}.png`} alt="daily-weather" />
                  <label className="day-of-week">{weekdaysForForecast[index]}</label>
                  <label className="weather-description">{dailyForecast.weather[0].description}</label>
                  <label className="forecast-temperature">{Math.round(dailyForecast.main.temp)}°C</label>
                  <label className="feels-like-temperature">Feels like <span className="value">{Math.round(dailyForecast.main.feels_like)}°C</span></label>
                  <label className="humidity">Humidity: <span className="value">{dailyForecast.main.humidity} %</span></label>
                  <label className="pressure">Pressure: <span className="value">{dailyForecast.main.pressure} mbar</span></label>
                  <label className="wind-speed">Wind: <span className="value">{Math.round(dailyForecast.wind.speed)} m/s</span></label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        )) }
      </Accordion>
    </>
  );
};

export default WeatherForecast;

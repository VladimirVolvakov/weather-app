// Styles:
import "./WeatherForecast.css";
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
                  <label className="temperature">{Math.round(dailyForecast.main.temp)}°C</label>
                  <label className="feels-like-temperature">{Math.round(dailyForecast.main.feels_like)}°C</label>
                  <label className="humidity">{dailyForecast.main.humidity}%</label>
                  <label className="pressure">{dailyForecast.main.pressure} mbar</label>
                  <label className="wind-speed">{Math.round(dailyForecast.wind.speed)} m/s</label>
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

// Components:
import CitySearch from './components/CitySearch/CitySearch';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
// Styles:
import './App.css';

function App() {
  const onSearchChangeHandler = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className='container'>
      <CitySearch onSearchChange={onSearchChangeHandler} />
      <CurrentWeather />
    </div>
  );
}

export default App;

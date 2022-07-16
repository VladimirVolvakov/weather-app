// Components:
import CitySearch from './components/CitySearch/CitySearch';
// Styles:
import './App.css';

function App() {
  const onSearchChangeHandler = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className='container'>
      <CitySearch onSearchChange={onSearchChangeHandler} />
    </div>
  );
}

export default App;

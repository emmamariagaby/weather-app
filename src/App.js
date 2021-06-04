import './App.css';

const App = () => {
  const { data, error, isLoading, setUrl } = UseFetch();

  const fetchContent = () => {
    if (error) return <p>Error when fetching: {error}</p>
    if (!data && isLoading) return <p>LOADING...</p>
    if (!data) return null;
    return <WeatherList weathers={data.daily} />
  };

  return (
    <div className="App">
      {fetchContent()}
    </div>
  );
}


export default App;

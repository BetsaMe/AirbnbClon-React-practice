import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';


function App() {

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className="cards-list">
        {data.map(element => {
          return  <Card 
                    key={element.id}
                    element={element}
                  />
        })}
        </section>
    </div>
  );
}

export default App;

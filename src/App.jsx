import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import "./App.css"
import ShowUnit from './components/Show Unit/ShowUnit';
import Value from './components/value/Value';
import Contact from './components/Contact/Contact';
import BookingNow from './components/BookingNow/BookingNow';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <ShowUnit />
      <Value/>
      <Contact/>
      <BookingNow/>
      <Footer/>
    </div>
  );
}

export default App;

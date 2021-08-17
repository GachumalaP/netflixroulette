import './App.css';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Header />
        <Movies />
        <div className="footer">
          <Footer> 
            <p className="footer-heading"><b>Netflix</b>roulette</p>
          </Footer>
        </div>
    </div>
  );
}

export default App;

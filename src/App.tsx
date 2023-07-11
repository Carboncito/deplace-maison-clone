import Loader from './components/Loader';
import './App.css';
import Title from './components/Title';
import Header from './components/Header';
import Images from './components/Images';

const App = () => {
  return (
    <>
      <Loader />
      <div>
        <Header />
        <div className="content">
          <Title />
          <Images />
        </div>
      </div>
    </>
  );
};

export default App;

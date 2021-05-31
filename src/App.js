import './App.css';
import SearchInput from './components/SearchInput';
import { AppWrapper } from './styledComponents/styles';
import gotImage from './assets/images/got-logo.png';

function App() {
  return (
    <AppWrapper>
      <header>
        <img src={gotImage} />
      </header>
      <SearchInput />
    </AppWrapper>
  );
}

export default App;

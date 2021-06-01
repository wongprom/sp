import './App.css';
import SearchInput from './components/SearchInput';
import { AppWrapper } from './styledComponents/styles';
import gotImage from './assets/images/got-logo.png';
import HouseLists from './components/HouseLists';

function App() {
  return (
    <AppWrapper>
      <header>
        <img src={gotImage} alt="Game of Thrones" />
      </header>
      <SearchInput />
      <HouseLists />
    </AppWrapper>
  );
}

export default App;

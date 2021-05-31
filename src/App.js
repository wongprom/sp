import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Title>Test</Title>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

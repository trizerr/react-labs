import './App.css';
import MainPage from './screens/MainPage';
import { theme } from './styles';
import { NativeBaseProvider } from 'native-base';

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <MainPage />
    </NativeBaseProvider>
  );
}

export default App;

import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { Navbar } from './src/screens/Navbar';

export default function App() {
  return(
    <NativeBaseProvider>
      <NavigationContainer>
        <Navbar />
      </NavigationContainer>
    </NativeBaseProvider>

    
  );
}
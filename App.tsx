import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { Navbar } from './src/screens/Navbar';
import { Login } from './src/screens/Login';
import { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return(
    <NativeBaseProvider>
      { loggedIn
        ? <NavigationContainer>
            <Navbar />
          </NavigationContainer>
        : <Login onLogin={() => setLoggedIn(true)} />
      }
    </NativeBaseProvider>

    
  );
}
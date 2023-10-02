import { NativeBaseProvider } from 'native-base'
import { FeedbackProvider } from './src/contexts/feedback';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import { Navbar } from './src/screens/Navbar';
import { Login } from './src/screens/Login';
import { Feedback } from './src/screens/Feedback';

import { setToken } from './src/api/config';
import { getData } from './src/api/local-storage';


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkSavedToken = async () => {
      const token = null; // await getData("token");

      // TODO: validate token

      if (token != null) {
        setToken(token);
        setLoggedIn(true);
      }
    };

    checkSavedToken();

  }, []);

  return(
    <NativeBaseProvider>
      <FeedbackProvider>
        <Feedback />
        { loggedIn
          ? (
            <NativeBaseProvider>
              <NavigationContainer>
                <Navbar />
              </NavigationContainer>
            </NativeBaseProvider>
          )
          : (
            <Login onLogin={() => setLoggedIn(true)} />
          )
        }
      </FeedbackProvider>
    </NativeBaseProvider>

    
  );
}
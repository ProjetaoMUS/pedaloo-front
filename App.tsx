import { NativeBaseProvider } from 'native-base'
import { FeedbackProvider } from './src/contexts/feedback';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import { Navbar } from './src/screens/Navbar';
import { Login } from './src/screens/Login';
import { Feedback } from './src/screens/Feedback';


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return(
    <NativeBaseProvider>
      <FeedbackProvider>
        <NavigationContainer>
          <Feedback />
          { loggedIn
            ? <Navbar />
            : <Login onLogin={() => setLoggedIn(true)} />
          }
        </NavigationContainer>
      </FeedbackProvider>
    </NativeBaseProvider>

    
  );
}
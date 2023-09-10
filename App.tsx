import { Home } from './src/screens/Home';
import { NativeBaseProvider } from 'native-base'
import { ParkingPlaces } from './src/screens/ParkingPlaces';

export default function App() {
  return(
    <NativeBaseProvider>
      <ParkingPlaces />
    </NativeBaseProvider>
  );
}
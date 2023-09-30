import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getPartnerLocations } from "../../api/partnerLocation";

export function Maps({ navigation }) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [parkingPlaceData, setParkingPlaceData] = useState([]);

  useEffect(() => {
    async function fetchParkingPlaces() {
      try {
        const data = await getPartnerLocations();
        setParkingPlaceData(data);
      } catch (error) {
        console.error("Error fetching parking places:", error);
      }
    }
    fetchParkingPlaces();

    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setIsLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });

      setIsLoading(false);
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <MapView style={styles.map} initialRegion={initialRegion}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Você está aqui"
            />
          )}

          {parkingPlaceData.map((parkingPlace) => (
            <Marker
              key={parkingPlace.id}
              image={require("../../../assets/location3.png")}
              onPress={() => {
                navigation.navigate("Reservation", {
                  parkingPlace: parkingPlace,
                });
              }}
              coordinate={{
                latitude: parkingPlace.latitude,
                longitude: parkingPlace.longitude,
              }}
              title={parkingPlace.name}
            />
          ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

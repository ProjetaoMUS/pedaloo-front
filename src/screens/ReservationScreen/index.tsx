import {
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  HStack,
  VStack,
  IconButton,
  Image,
  ScrollView,
  Skeleton,
  Spinner,
  Text,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { makeReservation } from "../../api/reservation";
import { useProfile } from '../../contexts/profile';

export function ReservationScreen({ navigation, route }) {
  const { parkingPlace } = route.params;
    const { userId } = useProfile();

  const reservation = {
    user: userId,
    location: parkingPlace.id,
    total_price: parkingPlace.price,
    bike_count: 1,
    is_active: true,
    payment_method: "PIX",
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Center py={6}>
          <Text fontSize="xl" bold>{parkingPlace.name}</Text>
          <Text fontSize="sm" color="muted.500">{parkingPlace.address}</Text>

          <IconButton
            position="absolute"
            top="50%"
            left={0}
            borderRadius="full"
            onPress={navigation.goBack}
            icon={
              <Ionicons name="chevron-back" color="black" size={27} />
            }
          />
        </Center>

        <Box w="100%" px={5} py={3}>
          <Text fontSize="sm" bold>Data e hora de agendamento</Text>
          <HStack p={1} alignItems="center">
            <Ionicons name="calendar-outline" color="black" size={29} />

            {/* TODO: Replace typescript constants with variables */}
            <Box flex={1} p={2}>
              <HStack>
                <Text bold>{"21 de setembro"} • </Text>
                <Text color="muted.500" bold>{"13:00"} - {"19:00"}</Text>
              </HStack>

              <Text fontSize="xs">Monthly budget</Text>
            </Box>

            {/* TODO: Something with this button */}
            <Button
              variant="link"
              _text={{
                color: "#32C100",
                fontSize: 14,
                fontWeight: "bold"
              }}
              _pressed={{
                _text: { color: "#299900" }
              }}
            >
              Mudar
            </Button>
          </HStack>
        </Box>

        <Divider w="100%" />

        <Box w="100%" px={6} py={3}>
          <Text fontSize="sm" bold>Forma de pagamento</Text>
          <HStack p={1} alignItems="center">
            {/* O Ionicons não tinha um ícone para PIX, então usei esse como placeholder */}
            <Ionicons name="wallet-outline" color="black" size={29} />

            {/* TODO: Replace typescript constant with variables */}
            <Box flex={1} p={2}>
              <Text bold>{"PIX"}</Text>
              <Text fontSize="xs">Monthly budget</Text>
            </Box>

            {/* TODO: Something with this button */}
            <Button
              variant="link"
              _text={{
                color: "#32C100",
                fontSize: 14,
                fontWeight: "bold"
              }}
              _pressed={{
                _text: { color: "#299900" }
              }}
            >
              Mudar
            </Button>
          </HStack>
        </Box>

        <Divider w="100%" />

      </ScrollView>

      <VStack
        position="absolute"
        alignItems="center"
        bottom={4}
        left={0}
        right={0}
        space={3}
      >
        <Button
          w="90%" py={5}
          rounded="full"
          bg="#32C000"
          _text={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold"
          }}
          _pressed={{
            bg: "#299900",
            _text: { color: "muted.200" }
          }}
          onPress={() => makeReservation(reservation)}
        >
          Confirmar compra
        </Button>

        <Button
          variant="link"
          _text={{
            color: "#696969",
            fontSize: 14,
            fontWeight: "bold"
          }}
          _pressed={{
            _text: { color: "muted.400" }
          }}
          onPress={navigation.goBack}
        >
          Cancelar
        </Button>
      </VStack>
    </>
  );
}

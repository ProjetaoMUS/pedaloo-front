import { Center, Box, Text, Button, VStack } from 'native-base';

export function Settings() {
	return (
		<Center flex={1} bg="white">
			<Box flex={1} w="100%" alignItems="center" pt="30%">
				<Text fontSize={14} color='black'>[editar senha]</Text>
			</Box>

			<VStack
				position="absolute"
				bottom={4}
				w="100%"
				space={3}
				alignItems="center"
			>
				<Button
					w="90%" py={5}
					rounded="full"
					bg="white"
					_text={{
						color: "#696969",
						fontSize: 14,
						fontWeight: "bold"
					}}
					_pressed={{
						bg: "white",
						_text: { color: "muted.400" }
					}}
					onPress={() => {}}
				>
					Apagar Conta
				</Button>

				<Button
					w="90%" py={5}
					rounded="full"
					bg="#FF5050"
					_text={{
						color: "white",
						fontSize: 14,
						fontWeight: "bold"
					}}
					_pressed={{
						bg: "#f65a5a",
						_text: { color: "muted.200" }
					}}
					onPress={() => {}}
				>
					Desconectar
				</Button>
			</VStack>
		</Center>
	);
}
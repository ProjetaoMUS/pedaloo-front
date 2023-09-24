import { Center, Text, Button, VStack } from 'native-base';

export function Settings() {
	return (
		<Center flex={1} bg="white">
			<Center w="100%" h="72%">
				<Text fontSize={14} color='black'>[edit password]</Text>
			</Center>

			<VStack flex={1} w="100%" space={3} alignItems="center">
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
					Delete Account
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
					Disconnect
				</Button>
			</VStack>
		</Center>
	);
}
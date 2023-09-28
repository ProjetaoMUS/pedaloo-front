import { VStack, Text, Button } from 'native-base';

export function Help() {
	return (
		<VStack flex={1} alignItems="center" space={5} bg="white">
			<Text my={5} fontSize={12} color='#8F94A3'>Estamos disponíveis por estes meios de contato:</Text>

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
				onPress={() => {}}
			>
				Whatsapp
			</Button>

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
				onPress={() => {}}
			>
				Email
			</Button>
		</VStack>
	);
}
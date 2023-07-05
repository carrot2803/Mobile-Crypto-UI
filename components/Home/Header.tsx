import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LIGHTGREY, LIGHTBLACK } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

export const Header = () => {
	return (
		<View style={[head.padding, head.style]}>
			<TouchableOpacity>
				<View>
					<View style={{ width: 20, height: 3, marginVertical: 5, backgroundColor: LIGHTGREY }}></View>
					<View style={{ width: 15, height: 3, backgroundColor: LIGHTGREY }}></View>
					<View style={{ width: 10, height: 3, marginVertical: 5, backgroundColor: LIGHTGREY }}></View>
				</View>
			</TouchableOpacity>
			<Text style={{ fontSize: 25, fontWeight: "500", color: LIGHTBLACK }}>Wallets</Text>
			<TouchableOpacity>
				<Ionicons name="wallet" size={26} color={LIGHTGREY} />
			</TouchableOpacity>
		</View>
	);
};

const head = StyleSheet.create({
	padding: { paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20, marginBottom: 20 },
	style: { flexDirection: "row", backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between" },
});

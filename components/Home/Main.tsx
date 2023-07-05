import { StyleSheet, Text, View } from "react-native";
import { wallet, LIGHTGREY } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Coin } from "../General/Coin";

export const Main = () => {
	return (
		<View>
			<Coin item={{ name: "Total Wallet Balance", bal: "$39.584", img: wallet }} />
			<View style={m.filters}>
				<Text style={{ color: LIGHTGREY }}>Sorted by higher %</Text>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Text style={{ color: LIGHTGREY }}>24 H</Text>
					<Ionicons name="chevron-down-outline" size={18} color={LIGHTGREY} />
				</View>
			</View>
		</View>
	);
};

const m = StyleSheet.create({
	filters: { flexDirection: "row", marginTop: 10, marginHorizontal: 5, justifyContent: "space-between" },
});

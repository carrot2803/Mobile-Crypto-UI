import { LIGHTBLACK, LIGHTGREY } from "../../constants";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Footer = () => {
	return (
		<View style={[foot.pos, foot.style]}>
			<View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: 40 }}>
				<Ionicons name="wallet" size={28} color={LIGHTBLACK} />
				<Ionicons name="compass" size={28} color={LIGHTGREY} />
				<Ionicons name="notifications" size={28} color={LIGHTGREY} />
				<Ionicons name="settings-sharp" size={28} color={LIGHTGREY} />
			</View>
		</View>
	);
};

const foot = StyleSheet.create({
	pos: { position: "absolute", left: 1, right: 1, bottom: 0 },
	style: { backgroundColor: "#fff", paddingHorizontal: 25, paddingTop: 20 },
});

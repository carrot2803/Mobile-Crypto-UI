import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LIGHTGREY, LIGHTBLACK } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

export const Header = ({ name }: any) => {
	const nav = useNavigation();
	return (
		<View style={[head.style, head.align]}>
			<TouchableOpacity onPress={() => nav.goBack()}>
				<Ionicons name="chevron-back-outline" size={28} color={LIGHTBLACK} />
			</TouchableOpacity>
			<Text style={{ fontSize: 25, fontWeight: "500", color: LIGHTBLACK }}>{name}</Text>
			<TouchableOpacity>
				<Ionicons name="ellipsis-vertical" size={26} color={LIGHTGREY} />
			</TouchableOpacity>
		</View>
	);
};

const head = StyleSheet.create({
	style: { paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20, backgroundColor: "#fff", marginBottom: 20 },
	align: { alignItems: "center", justifyContent: "space-between", flexDirection: "row" },
});

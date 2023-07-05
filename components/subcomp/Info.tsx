import { LIGHTBLACK, LIGHTGREY } from "../../constants";
import { View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Info = ({ name, img }: any) => {
	return (
		<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Image style={{ height: 60, width: 60 }} source={img}></Image>
				<Text style={{ color: LIGHTBLACK, fontWeight: "bold", marginLeft: 10 }}>{name}</Text>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Text style={{ color: LIGHTGREY }}>USD</Text>
				<Ionicons name="chevron-down-outline" size={20} color={LIGHTGREY} />
			</View>
		</View>
	);
};

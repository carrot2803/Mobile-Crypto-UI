import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { GREEN, LIGHTGREY, RED } from "../../constants";
import { Card } from "../subcomp/Card";

export const Coin = (props: { item: any; onPress?: () => void }) => {
	let { decreased, percent, diff, img } = props.item;

	return (
		<Pressable onPress={props.onPress}>
			<Card style={[coin.card, coin.cardpad]}>
				<View>
					<Image style={{ height: 60, width: 60 }} source={img}></Image>
				</View>
				<View style={{ flex: 2, marginLeft: 15, marginRight: 8 }}>
					<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
						<Text style={{ color: LIGHTGREY, fontWeight: "600" }}>{diff}</Text>
						<Text style={{ color: decreased ? RED : GREEN, fontWeight: "600" }}>{percent}</Text>
					</View>
				</View>
			</Card>
		</Pressable>
	);
};

const coin = StyleSheet.create({
	card: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 15 },
	cardpad: { paddingHorizontal: 10, paddingVertical: 20 },
});

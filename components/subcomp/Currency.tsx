import { GREEN, LIGHTBLACK, LIGHTGREY, expandchevron } from "../../constants";
import { Text, View, Image, StyleSheet } from "react-native";

export const Currency = () => {
	return (
		<>
			<View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
				<Text style={{ fontSize: 30, marginLeft: 5, color: LIGHTBLACK }}>$33.212</Text>
				<View style={wal.rate}>
					<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}>+ 3.55%</Text>
				</View>
			</View>
			<Text style={{ marginTop: 5, color: LIGHTGREY, fontSize: 20 }}>7.2131231 BTC</Text>
			<View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20, height: 20 }}>
				<Image style={{ marginTop: 30 }} source={expandchevron}></Image>
			</View>
		</>
	);
};

const wal = StyleSheet.create({
	rate: { borderRadius: 20, backgroundColor: GREEN, height: 25, paddingHorizontal: 10, paddingVertical: 5 },
});

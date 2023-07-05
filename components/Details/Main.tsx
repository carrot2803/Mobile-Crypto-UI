import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { LIGHTGREY } from "../../constants";
import { Wallet, CTA } from "../General";

export const Main = () => {
	return (
		<View style={{ height: Dimensions.get("window").height - 200 }}>
			<ScrollView style={{ marginHorizontal: 20 }}>
				<Wallet />
				<View style={[m.align, m.margin]}>
					<View style={{ backgroundColor: LIGHTGREY, borderRadius: 10 }}>
						<Text style={{ color: LIGHTGREY, padding: 5, fontWeight: "600" }}>Day</Text>
					</View>
				</View>
				<View style={m.btn}>
					<CTA action="Buy" />
					<CTA action="Sell" />
				</View>
			</ScrollView>
		</View>
	);
};

const m = StyleSheet.create({
	btn: { marginTop: 10, flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F5F8FF" },
	align: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
	margin: { marginTop: 10, marginHorizontal: 5 },
});

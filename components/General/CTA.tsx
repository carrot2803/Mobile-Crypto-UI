import { StyleSheet, Image, Text } from "react-native";
import { LIGHTBLACK, buy, sell } from "../../constants";
import { Card } from "../subcomp";

export const CTA = (props: { action: string }) => {
	return (
		<Card style={[props.action == "Buy" ? { marginRight: 5 } : { marginLeft: 5 }, cta.align, cta.style]}>
			<Image style={{ height: 45, width: 45 }} source={props.action == "Buy" ? buy : sell}></Image>
			<Text style={{ marginTop: 10, fontWeight: "600", color: LIGHTBLACK }}>{props.action} BTC</Text>
		</Card>
	);
};

const cta = StyleSheet.create({
	align: { flex: 1, alignItems: "center", justifyContent: "space-between" },
	style: { backgroundColor: "#fff", borderRadius: 10, padding: 15 },
});

import { View, StyleSheet } from "react-native";

export const Card = (props: { style: any; children: any }) => {
	return <View style={[card.container, props.style]}>{props.children}</View>;
};

const shadow = { shadowColor: "#ADB7C3", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 15 };
const card = StyleSheet.create({
	container: { ...shadow, elevation: 1 },
});

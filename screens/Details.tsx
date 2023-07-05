import { Footer, Header, Main } from "../components/Details";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";

export default function Details() {
	const params = useRoute().params;
	let { name }: any = params;

	return (
		<View style={{ height: "100%", backgroundColor: "#F5F8FF" }}>
			<Header name={name} />
			<Main />
			<Footer />
		</View>
	);
}

import { Footer, Header, List, Main } from "../components/Home";
import { View } from "react-native";

export default function Home() {
	return (
		<View style={{ height: "100%", backgroundColor: "#F5F8FF" }}>
			<Header />
			<View style={{ marginHorizontal: 20 }}>
				<Main />
				<List />
			</View>
			<Footer />
		</View>
	);
}

import { View, Dimensions, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Currencies } from "../../constants";
import { Coin } from "../General/Coin";

export default function List() {
	const nav: any = useNavigation();

	return (
		<View style={{ marginTop: 10, backgroundColor: "#F5F8FF", overflow: "hidden", marginBottom: 100 }}>
			<FlatList<any>
				data={Currencies}
				style={{ height: Dimensions.get("window").height / 2 - 60 }}
				ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }}></View>}
				renderItem={({ item }) => <Coin item={item} onPress={() => nav.navigate("details", item)} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

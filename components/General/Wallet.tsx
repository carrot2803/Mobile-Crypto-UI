import { useRoute } from "@react-navigation/native";
import { Card, Info, Currency } from "../subcomp";

export const Wallet = (props: { item?: any }) => {
	const params = useRoute().params;
	let { name, img } = typeof props.item == "undefined" ? params : props.item;

	return (
		<Card style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}>
			<Info name={name} img={img} />
			<Currency />
		</Card>
	);
};

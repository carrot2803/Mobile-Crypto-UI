import { createStackNavigator } from "@react-navigation/stack";
import Details from "../screens/Details";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function Nav() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="home" component={Home} />
			<Stack.Screen name="details" component={Details} />
		</Stack.Navigator>
	);
}

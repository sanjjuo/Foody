import { Text, View } from "react-native";
import WelcomeScreen from "../Components/WelcomeScreen"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WelcomeScreen/>
    </View>
  );
}

import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Index = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>DASHBOARD</Text>
    </SafeAreaView>
  );
}

export default Index;
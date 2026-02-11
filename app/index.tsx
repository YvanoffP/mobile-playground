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
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome to my playground!</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}

export default Index;
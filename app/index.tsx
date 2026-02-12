import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";
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
      <Text>Navigation experiments</Text>
      <Link href="/test" asChild>
        <Button>
          Go to Test View
        </Button>
      </Link>
    </SafeAreaView>
  );
}

export default Index;
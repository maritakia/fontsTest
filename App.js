import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/Inter-Black.ttf"),
    "Domine-Regular": require("./assets/Domine-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontFamily: "Domine-Regular", fontSize: 30 }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

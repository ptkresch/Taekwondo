import * as React from "react";
import { StyleSheet } from "react-native";
import AlertButtonComponent from "../components/AlertButton";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One!</Text>
      <AlertButtonComponent
        title="Alert Testing!"
        buttonConfig={{
          title: "This is an Alert!",
          message: "I'm alerting you that you are one excellent human being!",
          buttons: [
            {
              text: "Default",
              onPress: () => {
                console.log("default");
              },
              style: "default",
            },
            {
              text: "Cancel",
              onPress: () => {
                console.log("Cancel");
              },
              style: "cancel",
            },
            {
              text: "Destructive",
              onPress: () => {
                console.log("Destructive");
              },
              style: "destructive",
            },
          ],
          dismiss: {
            cancelable: false,
            onDismiss: () => {
              console.log("dismiss!");
            },
          },
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
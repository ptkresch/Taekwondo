import {
  Alert,
  AlertButton,
  AlertOptions,
  Button,
  StyleSheet,
  View,
} from "react-native";

const AlertButtonList = (
  title: string,
  message: string,
  buttons?: AlertButton[],
  dismiss?: AlertOptions
) => {
  Alert.alert(title, message, buttons, dismiss);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const AlertButtonComponent = () => (
  <View style={styles.container}>
    <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />

    <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
  </View>
);

export default AlertButtonList;

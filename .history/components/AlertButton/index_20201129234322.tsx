import {
  Alert,
  AlertButton,
  AlertOptions,
  Button,
  StyleSheet,
  View,
} from "react-native";

type AlertButtonOptions = {
  title: string;
  message: string;
  buttons?: AlertButton[];
  dismiss?: AlertOptions;
};

const AlertButtonList = (
  title: string,
  message: string,
  buttons?: AlertButton[],
  dismiss?: AlertOptions
) => {
  Alert.alert(title, message, buttons, dismiss);
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const AlertButtonComponent = (
  title: string,
  message: string,
  options: AlertButtonOptions
) => (
  <View style={styles.button}>
    <Button
      accessibilityLabel="Alert Button"
      color="green"
      disabled={false}
      title={title}
      onPress={() =>
        AlertButtonList(
          options.title,
          options.message,
          options.buttons,
          options.dismiss
        )
      }
      testID={title}
    />
  </View>
);

export default AlertButtonList;

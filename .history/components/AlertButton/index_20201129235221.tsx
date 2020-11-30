import * as React from "react";
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

const AlertButtonList = (options: AlertButtonOptions) => {
  Alert.alert(options.title, options.message, options.buttons, options.dismiss);
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const AlertButtonComponent = (title: string, options: AlertButtonOptions) => (
  <View style={styles.button}>
    <Button
      accessibilityLabel="Alert Button"
      color="green"
      disabled={false}
      title={title}
      onPress={() => AlertButtonList(options)}
      testID={title}
    />
  </View>
);

export default AlertButtonComponent;

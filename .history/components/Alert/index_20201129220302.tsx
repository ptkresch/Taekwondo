import { Alert, AlertOptions } from "react-native";

const AlertButtonComponent = undefined;

const dismiss: AlertOptions = {
  cancelable: true,
  onDismiss: () => {
    console.log("hooray! it dismissed!");
  },
};

const AlertComponent = () =>
  Alert.alert("title", "message", AlertButtonComponent, dismiss);

export default AlertComponent;

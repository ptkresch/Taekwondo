import { Alert, AlertOptions } from "react-native";

//Android
const dismiss: AlertOptions = {
  cancelable: true,
  onDismiss: () => {
    console.log("hooray! it dismissed!");
  },
};

const AlertComponent = (title: string, message: string) =>
  Alert.alert(title, message, [], dismiss);

export default AlertComponent;

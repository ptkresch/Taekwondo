import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MonoText } from "./StyledText";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View>
        <Text>Open up the code for this screen:</Text>

        <View>
          <MonoText>{path}</MonoText>
        </View>

        <Text>
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={handleHelpPress}>
          <Text>
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

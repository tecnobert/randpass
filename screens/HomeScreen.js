import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Clipboard,
  View,
  Button,
  Picker,
  ToastAndroid,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RandString from "randts";
import { MonoText } from "../components/StyledText";

export default function HomeScreen(props) {
  const showToast = () => {
    ToastAndroid.show(
      "Senha copiada para área de tranferência!",
      ToastAndroid.SHORT
    );
  };

  const [selectedValue, setSelectedValue] = useState(8);

  const [isGenerated, setIsGenerated] = useState(true);

  function generatePass(size) {
    size = selectedValue;
    return RandString(size);
  }
  let passwordReturn = generatePass();

  const copyToClipboard = () => {
    Clipboard.setString(passwordReturn);
    showToast();
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require("../assets/images/padlock.png")
                : require("../assets/images/padlock.png")
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>
            Selecione o tamanho da senha:
          </Text>

          <View style={styles.pick_sizer_container}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="0-4 dígitos" value={4} />
              <Picker.Item label="0-6 dígitos" value={6} />
              <Picker.Item label="0-8 dígitos" value={8} />
              <Picker.Item label="0-11 dígitos" value={11} />
            </Picker>
          </View>

          <Button
            onPress={() => {
              setIsGenerated(false);
            }}
            disabled={!isGenerated}
            title={isGenerated ? "Gerar senha" : "Senha gerada!"}
          />
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Senha gerada:</Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}
        >
          <MonoText
            style={styles.codeHighlightText}
            onPress={() => copyToClipboard()}
          >
            {isGenerated ? "minhasenha123" : passwordReturn}
          </MonoText>
        </View>

        <Text style={styles.developmentModeText}>
          Clique na senha para copiar
        </Text>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Saiba mais
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Gere facilmente uma senha segura e aleatória com o Rand Pass.{" "}
        {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        Gere facilmente uma senha segura e aleatória com o Rand Pass.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync("https://github.com/tecnobert/randpass");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pick_sizer_container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

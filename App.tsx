import * as Font from "expo-font";

import {
    Archivo_400Regular,
    Archivo_700Bold,
    useFonts,
} from "@expo-google-fonts/archivo";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import {
    Poppins_400Regular,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { AppLoading } from "expo";
import { GenerateProvider } from "./src/contexts/generate";
import MainNavigator from "./src/navigation/mainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { UtilityThemeProvider } from "react-native-design-utility";
import theme from "./src/constants/theme";

const themePaper = {
    ...DefaultTheme,
};

export default function App() {
    let [fontsLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <UtilityThemeProvider theme={theme}>
                <PaperProvider theme={themePaper}>
                    <GenerateProvider>
                        <NavigationContainer>
                            <MainNavigator />
                        </NavigationContainer>
                    </GenerateProvider>
                </PaperProvider>
            </UtilityThemeProvider>
        );
    }
}

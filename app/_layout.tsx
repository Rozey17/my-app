import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    GilroyThin: require("../assets/fonts/gilroy/Gilroy-Thin.ttf"),
    GilroyLight: require("../assets/fonts/gilroy/Gilroy-Light.ttf"),
    GilroyRegular: require("../assets/fonts/gilroy/Gilroy-Regular.ttf"),
    GilroyMedium: require("../assets/fonts/gilroy/Gilroy-Medium.ttf"),
    GilroySemiBold: require("../assets/fonts/gilroy/Gilroy-SemiBold.ttf"),
    GilroyBold: require("../assets/fonts/gilroy/Gilroy-Bold.ttf"),
    GilroyHeavy: require("../assets/fonts/gilroy/Gilroy-Heavy.ttf"),
    GilroyBlack: require("../assets/fonts/gilroy/Gilroy-Black.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <>
      <StatusBar backgroundColor="#392F6B" barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          animation: "slide_from_right",
          headerTitleStyle: { fontSize: 16 },
          headerShown: false,
        }}
      >
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

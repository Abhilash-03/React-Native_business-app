import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    'karla': require('@/assets/fonts/Karla-Regular.ttf'),
    'karla-medium': require('@/assets/fonts/Karla-Medium.ttf'),
    'karla-bold': require('@/assets/fonts/Karla-Bold.ttf'),
    'ubuntu': require('@/assets/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-medium': require('@/assets/fonts/Ubuntu-Medium.ttf'),
    'ubuntu-bold': require('@/assets/fonts/Ubuntu-Bold.ttf'),
  })
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}

import React, { useEffect, useState } from "react";
import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router"; // Slot is for rendering child routes/screens
import LoginScreen from "../components/LoginScreen";
import * as SecureStore from "expo-secure-store";

export default function RootLayout() {
   useFonts({
    'karla': require('@/assets/fonts/Karla-Regular.ttf'),
    'karla-medium': require('@/assets/fonts/Karla-Medium.ttf'),
    'karla-bold': require('@/assets/fonts/Karla-Bold.ttf'),
    'ubuntu': require('@/assets/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-medium': require('@/assets/fonts/Ubuntu-Medium.ttf'),
    'ubuntu-bold': require('@/assets/fonts/Ubuntu-Bold.ttf'),
  });

  const tokenCache = {
    async getToken(key) {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('SecureStore get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value)
      } catch (err) {
        return
      }
    },
  }

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
  }
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ClerkLoaded>
        <SignedIn>
           <Stack>
             <Stack.Screen name="(tabs)" />
           </Stack>
        </SignedIn>
        <SignedOut>
          <LoginScreen /> {/* Show the LoginScreen for signed-out users */}
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../app/css/main';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

const LoginScreen = () => {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow()

      if (createdSessionId) {
        setActive({ session: createdSessionId })
        console.log("Session created!")

      } else {
        // Use signIn or signUp for next steps such as MFA
        console.log("Session not created!")
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])
  return (
    <View>
      <View style={styles.loginContainer}>
        <Image source={require('../assets/images/login.png')} style={styles.loginImg} />
      </View>
      <View style={styles.loginArea}>
        <Text style={styles.subHeading}>
          Your Ultimate<Text style={styles.highlightedText}> Community Business Directory </Text>App
        </Text>
        <Text style={styles.para}>
          Find your favorite business near you and post your own business to your community.
        </Text>

        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

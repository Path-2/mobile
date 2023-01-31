import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { StyleSheet, TouchableOpacity } from "react-native";
import GoogleIcon from "../../assets/icons/google.svg";
import env from "../../tokens";
import { getUserDataFromGoogle } from "../../service/user";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleButton({ onSuccess, onFailure }: any) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: env.GOOGLE_CLIENT_ID_GO,
    iosClientId: env.GOOGLE_CLIENT_ID_IOS,
    androidClientId: env.GOOGLE_CLIENT_ID_ANDROID,
    webClientId: env.GOOGLE_CLIENT_ID_WEB,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;

      console.log(authentication, response);

      try {
        const rep = getUserDataFromGoogle(
          authentication?.accessToken!,
          Google.discovery.userInfoEndpoint!
        );

        rep.then((data) => {
          console.info(data)
          if (data) onSuccess(data);
          else onFailure(data);
        });
      } catch (err) {
        console.log((err as Error).message);
        onFailure((err as Error).message);
      }
    }
  }, [response]);

  return (
    <TouchableOpacity
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
      style={styles.signupOptionsButton}
    >
      <GoogleIcon height={30} width={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
  },
  signupOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  signupOptionsButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 10,
  },
  text: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  signupButton: {
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
});

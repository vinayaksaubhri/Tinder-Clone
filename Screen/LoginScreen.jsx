import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import useAuth from "../Hooks/useAuth";

const LoginScreen = () => {
  const { user, signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 160,
            width: 208,
            marginHorizontal: "25%",
            backgroundColor: "white",
            padding: 16,
            borderRadius: 16,
            fontWeight: "900",
          }}
        >
          <Text style={{ textAlign: "center" }} onPress={signInWithGoogle}>
            Sign in & Get Swiping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

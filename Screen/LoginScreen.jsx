import { View, Text, Button } from "react-native";
import useAuth from "../Hooks/useAuth";

const LoginScreen = () => {
  const { user, signInWithGoogle, loading } = useAuth();
  return (
    <View>
      <Text>{loading ? "Loading..." : "Login to the App"}</Text>
      <Button title="Login" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "./Hooks/useAuth";
import ChatScreen from "./Screen/ChatScreen";
import HomeScreen from "./Screen/HomeScreen";
import LoginScreen from "./Screen/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../Hooks/useAuth";

const HomeScreen = () => {
  const Navigation = useNavigation();
  const { logout } = useAuth();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to chat screen"
        onPress={() => {
          Navigation.navigate("Chat");
        }}
      />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;

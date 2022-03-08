import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../Hooks/useAuth";
import GlobalStyle from "../Style/GlobalStyle";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const Navigation = useNavigation();
  const { logout, user } = useAuth();
  return (
    <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={logout}>
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 / 2 }}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ height: 56, width: 56 }}
            resizeMode="contain"
            source={require("../Image/Tinder-Logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate("Chat");
          }}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

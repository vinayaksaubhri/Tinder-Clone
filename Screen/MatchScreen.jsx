import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const MatchScreen = () => {
  const Navigation = useNavigation();
  const { params } = useRoute();
  const { loginInProfile, userSwiped } = params;

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "rgb(239,68,68)",
        paddingTop: 80,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          // paddingLeft: 40,
          paddingTop: 80,
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: 90, alignSelf: "center" }}
          source={require("../Image/match_image.png")}
        />
      </View>
      <Text
        style={{
          color: "rgb(255,255,255)",
          textAlign: "center",
          // paddingLeft: 15,
          marginTop: 20,
        }}
      >
        You and {userSwiped.displayName} have like each other
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <Image
          style={{ height: 128, width: 128, borderRadius: 128 }}
          source={{ uri: loginInProfile[4] }}
        />
        <Image
          style={{ height: 128, width: 128, borderRadius: 128 }}
          source={{ uri: userSwiped.photoURL }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "rgb(255,255,255)",
          margin: 20,
          paddingHorizontal: 40,
          paddingVertical: 32,
          borderRadius: 40,
          marginTop: 80,
        }}
        onPress={() => {
          Navigation.goBack();
          Navigation.navigate("Chat");
        }}
      >
        <Text style={{ textAlign: "center" }}>Send a message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchScreen;

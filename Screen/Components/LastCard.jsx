import { View, Text, Image } from "react-native";
import React from "react";

const LastCard = () => {
  return (
    <View
      style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        height: "75%",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      }}
    >
      <Text style={{ fontWeight: "700", paddingBottom: 20 }}>
        No More Profile
      </Text>
      <Image
        style={{ height: 80, width: "100%" }}
        resizeMode="contain"
        source={{ uri: "https://links.papareact.com/6gb" }}
      />
    </View>
  );
};

export default LastCard;

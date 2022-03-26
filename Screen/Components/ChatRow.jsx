import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatRow = ({ matchDetail }) => {
  const Navigation = useNavigation();
  console.log("matchDetail", matchDetail);
  return (
    <TouchableOpacity
      onPress={() => {
        Navigation.navigate("Message", { matchDetail });
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 20,
        backgroundColor: "rgb(255,255,255)",
        marginHorizontal: 12,
        marginVertical: 4,
        borderRadius: 8,
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
      <Image
        style={{
          height: 64,
          width: 64,
          borderRadius: 100,
          marginRight: 16,
        }}
        source={{ uri: matchDetail?.photoURL }}
      />
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
          {matchDetail?.displayName}
        </Text>
        <Text>"Say Hi!"</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;

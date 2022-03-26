import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, callEnable }) => {
  const Navigation = useNavigation();
  return (
    <View
      style={{
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{ padding: 8 }}
          onPress={() => {
            Navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 8 }}>
          {title}
        </Text>
      </View>
      {callEnable && (
        <TouchableOpacity
          style={{
            borderRadius: 40,
            marginRight: 16,
            padding: 12,
            backgroundColor: "rgb(254,202,202)",
          }}
        >
          <Foundation name="telephone" size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

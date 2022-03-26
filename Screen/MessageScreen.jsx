import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Header from "./Components/Header";
import GlobalStyle from "../Style/GlobalStyle";
import { useRoute } from "@react-navigation/native";

const MessageScreen = () => {
  const { params } = useRoute();
  const { matchDetail } = params;
  const [input, setInput] = useState("");
  const sendMessage = () => {};
  return (
    <SafeAreaView
      style={[
        { ...GlobalStyle.AndroidSafeArea },
        { justifyContent: "space-between" },
      ]}
    >
      <Header title={matchDetail.displayName} callEnable={true} />
      <Text style={{ textAlign: "center", fontSize: 18 }}>
        Chat Feature coming soon 🙂
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#e5e7eb",
          paddingHorizontal: 20,
          paddingVertical: 8,
        }}
      >
        <TextInput
          style={{ height: 40, fontSize: 18 }}
          placeholder="Send message..."
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          value={input}
        />
        <Button title="Send" color="#FF5864" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;

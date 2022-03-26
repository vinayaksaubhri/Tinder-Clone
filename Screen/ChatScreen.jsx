import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import GlobalStyle from "../Style/GlobalStyle";
import Header from "./Components/Header";
import ChatList from "./Components/ChatList";

const ChatScreen = () => {
  return (
    <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
      <Header title="Chat" />
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;

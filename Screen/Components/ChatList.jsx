import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../Firebase";
import useAuth from "../../Hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    let chat;
    const modifychat = (chat) => {
      delete chat[0].timestamp;
      delete chat[0].usersMatched;
      let newUser = { ...chat[0] };
      delete newUser.users[user.uid];
      setMatches(Object.values(newUser.users));
    };
    onValue(ref(database, "matches/"), (snapshot) => {
      if (snapshot.exists())
        chat = Object.values(snapshot.val()).filter((obj) => {
          if (obj.usersMatched.includes(user.uid)) {
            return true;
          } else {
            return false;
          }
        });
      modifychat(chat);
    });

    console.log("--->>chat", matches);
  }, [user]);

  return matches.length > 0 ? (
    <FlatList
      style={{ height: "100%" }}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow matchDetail={item} />}
    />
  ) : (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
        }}
      >
        No matches at the moment 😢
      </Text>
    </View>
  );
};

export default ChatList;

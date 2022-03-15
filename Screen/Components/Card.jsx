import { View, Text, Image } from "react-native";
import React from "react";

const Card = ({ card }) => {
  return (
    <View
      key={card.id}
      style={{
        backgroundColor: "rgb(255,255,255)",
        height: "75%",
        borderRadius: 12,
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          borderRadius: 12,
        }}
        source={{ uri: card.photoURL }}
      />
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 80,
          position: "absolute",
          bottom: 0,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          height: 80,
          paddingHorizontal: 24,
          paddingVertical: 8,
          borderBottomRightRadius: 12,
          borderBottomLeftRadius: 12,
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
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 2,
            }}
          >
            {card.firstName} {card.lastName}
          </Text>
          <Text>{card.occupation}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>{card.age}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

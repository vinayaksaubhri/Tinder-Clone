import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../Hooks/useAuth";
import GlobalStyle from "../Style/GlobalStyle";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { DUMMY_DATA } from "../DummyData";

const HomeScreen = () => {
  const Navigation = useNavigation();
  const { logout, user } = useAuth();
  const swipeRef = useRef(null);
  return (
    <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
      {/* Start of the header */}
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
      {/* End of the header */}

      {/* Cards */}
      <View style={{ flex: 1, marginTop: -6 }}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          ref={swipeRef}
          onSwipedLeft={() => {
            console.log("Left");
          }}
          onSwipedRight={() => {
            console.log("Right");
          }}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => (
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
                    style={{ fontSize: 20, fontWeight: "700", marginBottom: 2 }}
                  >
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 24, fontWeight: "700" }}>
                    {card.age}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => {
            swipeRef.current.swipeLeft();
          }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 64,
            width: 64,
            height: 64,
            backgroundColor: "rgb(254, 202, 202)",
          }}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swipeRef.current.swipeRight();
          }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 64,
            width: 64,
            height: 64,
            backgroundColor: "rgb(187,247,208)",
          }}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

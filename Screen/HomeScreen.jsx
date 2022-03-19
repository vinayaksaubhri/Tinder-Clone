import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../Hooks/useAuth";
import GlobalStyle from "../Style/GlobalStyle";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { DUMMY_DATA } from "../DummyData";
import Card from "./Components/Card";
import LastCard from "./Components/LastCard";
import { child, get, onValue, push, ref, set } from "firebase/database";
import { database, db } from "../Firebase";
import {
  collection,
  doc,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import generateId from "../Lib/generateID";

const HomeScreen = () => {
  const Navigation = useNavigation();
  const { logout, user } = useAuth();
  const swipeRef = useRef(null);
  const [profile, setProfile] = useState([]);

  useLayoutEffect(() => {
    const unSub = onValue(ref(database, "users/" + user.uid), (snapshot) => {
      console.log("working", snapshot);
      if (!snapshot.exists()) {
        Navigation.navigate("Modal");
      }
    });
    return unSub;
  }, []);

  useEffect(() => {
    let unSub;
    const fetchCard = async () => {
      let passes = [];
      let swipes = [];
      onValue(
        ref(database, "users/" + user.uid + "/" + "passes"),
        (snapshot) => {
          if (snapshot.exists())
            passes = Object.values(snapshot.val()).map((doc) => doc.id);
        }
      );

      onValue(
        ref(database, "users/" + user.uid + "/" + "swipes"),
        (snapshot) => {
          if (snapshot.exists())
            swipes = Object.values(snapshot.val()).map((doc) => doc.id);
        }
      );

      onValue(ref(database, "users"), (snapshot) => {
        const doc_profile = Object.values(snapshot.val())
          .filter((doc) => {
            if (
              passes.includes(doc.id) ||
              swipes.includes(doc.id) ||
              doc.id === user.uid
            ) {
              return false;
            } else {
              return true;
            }
          })
          .map((doc) => ({
            id: doc.id,
            ...doc,
          }));
        setProfile(doc_profile);
      });
      return unSub;
    };
    fetchCard();
  }, []);

  const swipeLeft = (cardIndex) => {
    if (!profile[cardIndex]) return;

    const userSwiped = profile[cardIndex];
    set(
      ref(database, "users/" + user.uid + "/" + "passes/" + userSwiped.id),
      userSwiped
    );
  };
  const swipeRight = (cardIndex) => {
    if (!profile[cardIndex]) return;

    const userSwiped = profile[cardIndex];
    set(
      ref(database, "users/" + user.uid + "/" + "swipes/" + userSwiped.id),
      userSwiped
    );
    let loginInProfile;
    onValue(ref(database, "users/" + user.uid), (snapshot) => {
      if (snapshot.exists()) loginInProfile = Object.values(snapshot.val());
    });
    onValue(
      ref(database, "users/" + userSwiped.id + "/" + "swipes/" + user.uid),
      (snapshot) => {
        if (snapshot.exists()) {
          console.log(`You have matched with ${userSwiped.displayName}`);
          set(
            ref(
              database,
              "users/" + user.uid + "/" + "swipes/" + userSwiped.id
            ),
            userSwiped
          );
          set(ref(database, "matches/" + generateId(user.uid, userSwiped.id)), {
            users: {
              [user.uid]: loginInProfile,
              [userSwiped.id]: userSwiped,
            },
            usersMatched: [user.uid, userSwiped.id],
            timestamp: serverTimestamp(),
          });
          Navigation.navigate("Match", {
            loginInProfile,
            userSwiped,
          });
        }
      }
    );
  };
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
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate("Modal");
          }}
        >
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
          cards={profile}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          ref={swipeRef}
          onSwipedLeft={(cardIndex) => {
            swipeLeft(cardIndex);
          }}
          onSwipedRight={(cardIndex) => {
            swipeRight(cardIndex);
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
          renderCard={(card) => (card ? <Card card={card} /> : <LastCard />)}
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

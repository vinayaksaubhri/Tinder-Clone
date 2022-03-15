import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import GlobalStyle from "../Style/GlobalStyle";
import useAuth from "../Hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
// import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { database, db } from "../Firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { push, ref, set } from "firebase/database";

const ModalScreen = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);
  const incompleteForm = !image || !job || !age;
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: "true",
      headerTitle: "Update your profile",
      headerStyle: {
        backgroundColor: "#ff5864",
      },
      headerTitleStyle: { color: "white" },
    });
  }, []);

  const updateUserProfile = () => {
    const ContactRef = ref(database, "users");
    const newContactRef = push(ContactRef);
    set(newContactRef, {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timesStamp: serverTimestamp(),
    })
      .then(() => {
        Navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View style={{ ...GlobalStyle.AndroidSafeArea, paddingBottom: 0 }}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Image
          style={{ height: 80, width: "100%" }}
          resizeMode="contain"
          source={require("../Image/Tinder-Logo-Modal.png")}
        />
        <Text
          style={{
            fontSize: 20,
            color: "rgb(107,114,128)",
            fontWeight: "700",
            padding: 8,
          }}
        >
          Welcome {user.displayName}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            padding: 16,
            color: "rgb(239,68,68)",
          }}
        >
          Step 1: The Profile Pic
        </Text>
        <TextInput
          value={image}
          onChangeText={(text) => setImage(text)}
          style={{ textAlign: "center", fontSize: 20, paddingBottom: 8 }}
          placeholder="Enter a Profile Pic URL"
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            padding: 16,
            color: "rgb(239,68,68)",
          }}
        >
          Step 2: The Job
        </Text>
        <TextInput
          value={job}
          onChangeText={(text) => setJob(text)}
          style={{ textAlign: "center", fontSize: 20, paddingBottom: 8 }}
          placeholder="Enter your Occupation"
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            padding: 16,
            color: "rgb(239,68,68)",
          }}
        >
          Step 3: The Age
        </Text>
        <TextInput
          value={age}
          onChangeText={(text) => setAge(text)}
          style={{ textAlign: "center", fontSize: 20, paddingBottom: 8 }}
          placeholder="Enter your Age"
          keyboardType="numeric"
          maxLength={2}
        />
        <TouchableOpacity
          disabled={incompleteForm}
          style={{
            width: 256,
            padding: 12,
            borderRadius: 12,
            position: "absolute",
            bottom: 40,
            backgroundColor: "rgb(248,113,113)",
            backgroundColor: `${
              incompleteForm ? "rgb(156,163,175)" : "rgb(248,113,113)"
            }`,
          }}
          onPress={updateUserProfile}
        >
          <Text
            style={{
              textAlign: "center",
              color: "rgb(255,255,255)",
              fontSize: 20,
            }}
          >
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalScreen;

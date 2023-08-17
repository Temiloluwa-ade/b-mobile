import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useRef, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const Onboard = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View>
        <Text>Onboard</Text>
      </View>
    </SafeAreaView>
  );
}

export default Onboard
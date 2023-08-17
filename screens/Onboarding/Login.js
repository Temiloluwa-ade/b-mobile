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

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView>
      <View className="flex justify-between flex-col">
        <View className="mb-10">
          <Text className="text-[#163300] font-bold text-xl self-center mt-10">
            Sign in to resume
          </Text>
          <Text className="text-[#163300] font-semibold self-center">
            your Breew experience
          </Text>
        </View>
        <View>
          <View className="mt-10 mx-6">
            <View>
              <Text className="text-sm">
                Email address <Text className="text-[#EE2E31]"> *</Text>
              </Text>
              <TextInput
                placeholder="welcome@breew.finance"
                className="mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md"
              />
            </View>
            <View className="mt-6">
              <Text className="text-sm">
                Password <Text className="text-[#EE2E31]"> *</Text>
              </Text>
              <TextInput
                placeholder="enter a password"
                className="mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md"
              />
            </View>
          </View>
        </View>
        <View className="mt-10">
          <Pressable
            className="flex items-center justify-center text-center rounded-md"
            onPress={() => navigation.navigate("Login")}
          >
            <View className=" bg-[#163300] rounded-md items-center w-[90%] mx-2 p-3">
              <Text className="text-sm text-white">Sign in</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Onboarding")}
            className="mt-4"
          >
            <View>
              <Text className="self-center">
                New to Breew?
                <Text className="font-semibold text-[#163300]">Sign up</Text>
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

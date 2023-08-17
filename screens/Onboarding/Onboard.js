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
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView>
      <View className="flex justify-between flex-col">
        <View className="mb-10">
          <Text className="text-[#163300] font-bold text-xl self-center mt-10">
            Sign up to begin
          </Text>
          <Text className="text-[#163300] font-semibold self-center">
            your Breew experience
          </Text>
        </View>
        <View>
          <View className="mt-10 mx-6">
            <View>
              <Text className="text-sm">
                Email address <Text className="text-[#FFC727]"> *</Text>
              </Text>
              <TextInput
                placeholder="example@gmail.com"
                className="mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md"
              />
            </View>
            <View className="flex-row space-x-4 items-center">
              <View className="mt-6">
                <Text className="text-sm">
                  First name <Text className="text-[#FFC727]"> *</Text>
                </Text>
                <TextInput
                  placeholder="enter first name"
                  className="mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md w-40"
                />
              </View>
              <View className="mt-6">
                <Text className="text-sm">
                  Last name <Text className="text-[#FFC727]"> *</Text>
                </Text>
                <TextInput
                  placeholder="enter last name"
                  className="mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md w-40"
                />
              </View>
            </View>
            <View className="mt-6">
              <Text className="text-sm">
                Password <Text className="text-[#FFC727]"> *</Text>
              </Text>
              <TextInput
                placeholder="enter a password"
                className="mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md"
              />
            </View>
            <View className="mt-6">
              <Text className="text-sm">
                Confirm password <Text className="text-[#FFC727]"> *</Text>
              </Text>
              <TextInput
                placeholder="confirm your password"
                className="mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md"
              />
            </View>
          </View>
        </View>
        <View className="mt-10">
          <Pressable
            className="flex items-center justify-center text-center rounded-md"
            onPress={() => navigation.navigate("Onboarding")}
          >
            <View className=" bg-[#163300] rounded-md items-center w-[90%] mx-2 p-3">
              <Text className="text-sm text-white">Sign up</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            className="mt-4"
          >
            <View>
              <Text className="self-center">
                Already have an account?{" "}
                <Text className="font-semibold text-[#163300]">Sign in</Text>
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard;

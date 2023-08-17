import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Navigation/AuthStack";
import GeneralStack from "./Navigation/GeneralStack";

export default function App() {
  return (
    <>
      <NavigationContainer mode="modal">
        <AuthStack>
          <GeneralStack></GeneralStack>
        </AuthStack>
      </NavigationContainer>
    </>
  );
}

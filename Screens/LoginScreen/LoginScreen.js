import { View } from "react-native";
import LoginForm from "./LoginForm";
import { BgImg } from "./LoginForm.styled";


export default LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <BgImg source={require("../../assets/img/PhotoBG.png")}>
        <LoginForm />
      </BgImg>
    </View>
  );
};

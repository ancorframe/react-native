import { View } from "react-native";
import { BgImage } from "../commonComponent/BgImage/BgImage";
import LoginForm from "./LoginForm";

export default LoginScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <BgImage>
        <LoginForm navigation={navigation} />
      </BgImage>
    </View>
  );
};

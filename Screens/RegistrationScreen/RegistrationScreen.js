import { View } from "react-native";
import { BgImage } from "../commonComponent/BgImage/BgImage";
import RegistrationForm from "./RegistrationForm";

export default RegistrationScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <BgImage>
        <RegistrationForm navigation={navigation} />
      </BgImage>
    </View>
  );
};

import { View } from "react-native";
import RegistrationForm from "./RegistrationForm";
import { BgImg } from "./RegistrationForm.styled";

export default RegistrationScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <BgImg source={require("../../assets/img/PhotoBG.png")}>
        <RegistrationForm />
      </BgImg>
    </View>
  );
};

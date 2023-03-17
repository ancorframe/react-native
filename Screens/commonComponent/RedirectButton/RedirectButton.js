import { TouchableOpacity, View } from "react-native";
import { Button } from "./RedirectButton.styled";

export const RedirectButton = ({ children, onPress, ...props }) => {
  return (
    <>
      <View style={{ marginTop: 16, alignItems:'center' }} {...props}>
        <Button onPress={onPress}>{children}</Button>
      </View>
    </>
  );
};

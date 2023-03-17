import { Text, TouchableOpacity } from "react-native";
import { Label, Wrap } from "./SubmitButton.styled";

export const SubmitButton = ({ onPress, children,...props }) => {
  return (
    <Wrap onPress={onPress} {...props}>
      <Label>{children}</Label>
    </Wrap>
  );
};

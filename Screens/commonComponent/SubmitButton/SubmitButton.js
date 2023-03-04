import { Text, TouchableOpacity } from "react-native";
import { Label, Wrap } from "./SubmitButton.styled";


export const SubmitButton = ({ onPress, children }) => (
  <Wrap onPress={onPress}>
        <Label>{children}</Label>
  </Wrap>
);

import { Label, Wrap } from "./ShowButton.styled";


export const ShowButton = ({ onPress, children }) => (
  <Wrap onPress={onPress}>
    <Label>{children}</Label>
  </Wrap>
);

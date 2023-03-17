import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import styled from "styled-components/native";

export const UserImg = styled(Image)`
  width: 28px;
  height: 28px;
  /* background-color: #000; */
  border-radius: 50%;
  ${(p) => (!p.reverse ? "margin-right: 16px" : "margin-left: 16px;")}
`;
export const CommentWrap = styled(View)`
  padding: 16px;
  flex-direction: column;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-top-right-radius: 6px;
  ${(p) =>
    !p.reverse
      ? "border-top-right-radius: 6px"
      : "  border-top-left-radius: 6px"}
`;
export const CommentText = styled(Text)`
  font-family: "Roboto-Light";
  font-size: 13px;
  line-height: 18px;
  color: #212121;
  margin-bottom: 8px;
`;
export const CommentTime = styled(Text)`
  font-family: "Roboto-Light";
  font-size: 10px;
  line-height: 12px;
  color: #bdbdbd;
  ${(p) => (!p.reverse ? "align-self: flex-end;" : "align-self: flex-start")}
`;
export const Input = styled(TextInput)`
  height: 50px;
  background-color: #f6f6f6;

  border: 1px solid #e8e8e8;
  border-radius: 100px;
  padding: 16px;
`;

export const SubmitButton = styled(TouchableOpacity)`
position: absolute;
top: 8px;
right: 8px;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ff6c00;
`;
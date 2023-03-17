import { TextInput, View, Text } from "react-native";
import styled from "styled-components/native";

export const Form = styled(View)`
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Title = styled(Text)`
  font-family: "Roboto-Medium";
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  /* letter-spacing: 0.01; */
  color: #212121;
  margin-top: 92px;
  margin-bottom: 33px;
`;

export const Wrap = styled(View)`
  position: relative;
  background-color: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 0 18px;
`;

export const Input = styled(TextInput)`
  height: 50px;
  background-color: #f6f6f6;
  border: 1px solid;
  border-color: #e8e8e8;
  border-radius: 4px;
  padding: 16px 16px 15px;
  font-family: "Roboto-Regular";
  font-size: 16px;
  line-height: 19px;
  color: #212121;
  ${(p) => !p.last && "margin-bottom: 16px;"}
  ${(p) =>
    p.last
      ? p.isShowKeyboard
        ? "margin-bottom: 32px;"
        : "margin-bottom: 43px;"
      : ""}
  ${(p) => p.error && "border-color:#FF0000"}
`;

export const ErrorInput = styled(Text)`
  position: absolute;
  color: red;
`;

import { Text, View } from "react-native";
import styled from "styled-components/native";

export const UserWrap = styled(View)`
  margin: 32px 0;
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled(Text)`
  font-family: "Roboto-Bold";
  font-size: 13px;
  line-height: 15px;
  color: #212121;
`;

export const UserEmail = styled(Text)`
  font-family: "Roboto-Light";
  font-size: 11px;
  line-height: 13px;
  color: rgba(33, 33, 33, 0.8);
`;

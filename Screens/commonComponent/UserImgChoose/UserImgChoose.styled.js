import { TouchableOpacity, View, Image } from "react-native";
import styled from "styled-components/native";

export const ImgWrap = styled(View)`
  position: absolute;
  top: -60px;
  align-self: center;
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #f6f6f6;
`;

export const ImgButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 14px;
  right: -12.5px;
`;

export const Img = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #f6f6f6;
`;

export const ImgSkeleton = styled(View)`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #f6f6f6;
`;

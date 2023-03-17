import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";
import CameraIcon from "../../img/camera_alt-black.svg";

export const WrapButton = styled(View)`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30px, -30px);
`;

export const ButtonImg = styled(View)`
  height: 60px;
  width: 60px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${(p) =>
    p.select &&
    `background-color:rgba(255, 255, 255, 0.3);
  `}
`;

export const CameraIcn = styled(CameraIcon)`
  ${(p) => (p.select ? "color:#FFFFFF" : "color:#BDBDBD")}
`;

export const ImgInfo = styled(Text)`
  font-family: "Roboto-Light";
  font-size: 16px;
  line-height: 19px;
  color: #bdbdbd;
  margin-bottom: 32px;
`;

export const Input = styled(TextInput)`
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
  height: 50px;
  margin: 0;
  padding: 0;

  font-family: "Roboto-Light";
  font-size: 16px;
  line-height: 19px;
  ${(p) => !p.last && "  margin-bottom: 16px"}
  ${(p) => p.last && "padding-left: 28px"}
`;

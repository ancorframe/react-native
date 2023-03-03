import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";

export const Wrap = styled(TouchableOpacity)`
position: absolute;
right: 16px;
top: 16px;
`;

export const Label = styled(Text)`
  font-family: "Roboto-Regular";
  /* font-style: normal; */
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* text-align: center; */

  /* White */

  color: #1b4371;
`;

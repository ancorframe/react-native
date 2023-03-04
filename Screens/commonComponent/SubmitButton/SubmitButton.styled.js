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
  width: 100%;
  height: 51px;
  padding: 16px 0; 
  background-color: #ff6c00;

  border: 0;
  border-radius: 100px;

  
`;


export const Label = styled(Text)`
  font-family: "Roboto-Regular";
  /* font-style: normal; */
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  /* White */

  color: #ffffff;
`;
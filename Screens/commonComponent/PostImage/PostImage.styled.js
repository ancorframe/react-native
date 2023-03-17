import { Image } from "react-native";
import styled from "styled-components/native";

export const Img = styled(Image)`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  background: #f6f6f6;
  ${(p) => !p.source && "border: 1px solid #e8e8e8;"}
  border-radius: 8px;
`;

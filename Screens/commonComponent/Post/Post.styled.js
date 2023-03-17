import { Text } from "react-native";
import styled from "styled-components/native";
import CommentIcon from "../../../img/message-circle.svg";

export const PostName = styled(Text)`
  font-family: "Roboto-Medium";
  font-size: 16px;
  line-height: 19px;
  color: #212121;
  margin-bottom: 8px;
`;

export const PostComments = styled(Text)`
  font-family: "Roboto-Light";
  font-size: 16px;
  line-height: 19px;
  color: #bdbdbd;
`;
export const PostLocation = styled(Text)`
  font-family: "Roboto-Light";
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #212121;
`;

export const CommentIcn = styled(CommentIcon)`
  margin-right: 9px;
  color: transparent;
  stroke: #bdbdbd;
  ${(p) =>
    p.comments > 0 &&
    `color:  #FF6C00;
  stroke:  #FF6C00;`};
`;

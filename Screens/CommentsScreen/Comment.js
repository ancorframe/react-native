import { View } from "react-native";
import { CommentText, CommentTime, CommentWrap, UserImg } from "./CommentsScreen.styled";

export const Comment = ({ ...props }) => {
  // console.log('props',props);
  const { author, nickname, comment, date, avatar } = props;
  return (
    <>
      {author === nickname && (
        <View
          style={{
            flexDirection: "row-reverse",
            marginBottom: 24,
          }}
        >
          <UserImg source={{ uri: avatar }} reverse />
          <CommentWrap reverse>
            <CommentText reverse>{comment}</CommentText>
            <CommentTime reverse>{date}</CommentTime>
          </CommentWrap>
        </View>
      )}
      {author !== nickname && (
        <View
          style={{
            flexDirection: "row",
            marginBottom: 24,
          }}
        >
          <UserImg source={{ uri: avatar }} />
          <CommentWrap>
            <CommentText>{comment}</CommentText>
            <CommentTime>{date}</CommentTime>
          </CommentWrap>
        </View>
      )}
    </>
  );
};

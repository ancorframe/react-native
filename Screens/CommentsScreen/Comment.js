import { View } from "react-native";
import { CommentText, CommentTime, CommentWrap, UserImg } from "./CommentsScreen.styled";

export const Comment = ({ type, avatar, comment, time }) => {
  return (
    <>
      {type === "answer" && (
        <View
          style={{
            flexDirection: "row-reverse",
            marginBottom: 24,
          }}
        >
          <UserImg source={avatar} reverse />
          <CommentWrap reverse>
            <CommentText reverse>{comment}</CommentText>
            <CommentTime reverse>{time}</CommentTime>
          </CommentWrap>
        </View>
      )}
      {type === "comment" && (
        <View
          style={{
            flexDirection: "row",
            marginBottom: 24,
          }}
        >
          <UserImg source={avatar} />
          <CommentWrap>
            <CommentText>{comment}</CommentText>
            <CommentTime>{time}</CommentTime>
          </CommentWrap>
        </View>
      )}
    </>
  );
};

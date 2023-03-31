import { Image, View } from "react-native";
import { UserEmail, UserName, UserWrap } from "./UserInfo.styled";

export const UserInfo = ({ avatar, nickname, email, ...props }) => {
  return (
    <UserWrap {...props}>
      <Image
        style={{ width: 60, height: 60, borderRadius: 16, marginRight: 8 }}
        source={{uri:avatar}}
      />
      <View>
        <UserName>{nickname}</UserName>
        <UserEmail>{email}</UserEmail>
      </View>
    </UserWrap>
  );
};

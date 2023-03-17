import { FlatList,View } from "react-native";
import { Post } from "../commonComponent/Post/Post";
import { UserInfo } from "../commonComponent/UserInfo/UserInfo";

const IMAGENAME = require("../../assets/adaptive-icon.png");

const post = [
  { image: IMAGENAME, name: "lis", comments: 50, location: "lviv" },
  { image: IMAGENAME, name: "lis", comments: 50, location: "lviv" },
  { image: IMAGENAME, name: "lis", comments: 50, location: "lviv" },
  { image: IMAGENAME, name: "lis", comments: 0, location: "lviv" },
];
const user = {
  avatar: IMAGENAME,
  name: "Natali Romanova",
  email: "email@example.com",
};

export const Posts = ({ navigation }) => {
  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#fff" }}>
        <UserInfo {...user} />
        <FlatList
          data={post}
          renderItem={(post) => <Post {...post.item} navigation={navigation} />}
        />
      </View>
    </>
  );
};

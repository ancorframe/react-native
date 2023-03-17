import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BgImage } from "../commonComponent/BgImage/BgImage";
import { UserImgChoose } from "../commonComponent/UserImgChoose/UserImgChoose";
import Feather from "react-native-vector-icons/Feather";
import { Post } from "../commonComponent/Post/Post";

const IMAGENAME = require("../../assets/adaptive-icon.png");

const post = [
  { image: IMAGENAME, name: "lis", comments: 50, location: "lviv", likes: 30 },
  { image: IMAGENAME, name: "lis", comments: 50, location: "lviv", likes: 30 },
  { image: IMAGENAME, name: "lis", comments: 50, location: "lviv", likes: 30 },
  { image: IMAGENAME, name: "lis", comments: 0, location: "lviv", likes: 0 },
];

export const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(null);

  return (
    <>
      <BgImage>
        <View
          style={{
            backgroundColor: "#fff",
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            flex: 1,
            marginTop: 147,
            paddingHorizontal: 16,
          }}
        >
          <UserImgChoose avatar={avatar} setAvatar={setAvatar} />
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginTop: 22, marginBottom: 46 }}
          >
            <Feather name="log-out" color="#BDBDBD" size={24} />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              marginBottom: 33,
            }}
          >
            Natali Romanova
          </Text>
          <FlatList
            data={post}
            renderItem={(post) => <Post widthLikes {...post.item} />}
          />
        </View>
      </BgImage>
    </>
  );
};

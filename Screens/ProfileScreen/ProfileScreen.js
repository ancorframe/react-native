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
import { useSelector } from "react-redux";
import { user } from "../../redux/selectors/authSelector";
import { useEffect } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase/config";
import {  useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

export const ProfileScreen = ({navigation}) => {
  const { avatar, userId, nickname } = useSelector(user);
  const [avatars, setAvatar] = useState(avatar);
  const [posts, setPosts] = useState([]);

    const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        // const querySnapshot = await getDocs(collection(db, "posts"));
        // querySnapshot.forEach((doc) => {
        //   // console.log(doc.id, " => ", doc.data());
        //   setPosts((posts) => [...posts, { id: doc.id, ...doc.data() }]);
        // });
        const q = query(
          collection(db, "posts"),
          where("userId", "==", userId),
          // orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          setPosts((posts) => [...posts, { id: doc.id, ...doc.data() }]);
        });

      } catch (error) {
        console.error("post", error);
      }
    })();
    return () => {
      setPosts([]);
    };
  }, []);
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
          <UserImgChoose avatar={avatars} setAvatar={setAvatar} />
          <TouchableOpacity onPress={()=>  dispatch(logout())}
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
            {nickname}
          </Text>
          <FlatList
            data={posts}
            renderItem={(post) => <Post widthLikes {...post.item} />}
          />
        </View>
      </BgImage>
    </>
  );
};

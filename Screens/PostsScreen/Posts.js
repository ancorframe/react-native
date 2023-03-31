import { FlatList, View } from "react-native";
import { Post } from "../commonComponent/Post/Post";
import { UserInfo } from "../commonComponent/UserInfo/UserInfo";
import {
  // doc,
  onSnapshot,
  collection,
  query,
  // getDocs,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";
import { useSelector } from "react-redux";
import { user } from "../../redux/selectors/authSelector";
import { useEffect } from "react";
// import { useFocusEffect } from "@react-navigation/native";

export const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const userInfo = useSelector(user);
  // console.log(userInfo);
  useEffect(() => {
    fetch();
  }, []);
// useLayoutEffect(() => {
//   const unsubscribe = navigation.addListener("focus", () => {
//     fetch();
//   });

//   return unsubscribe;
// }, [navigation]);

  // useFocusEffect(
  //   useCallback(() => {
  //     fetch();
  //   }, [])
  // );


const fetch = async () => {
  try {
    // const querySnapshot = await getDocs(collection(db, "posts"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, " => ", doc.data());
    //   setPosts((posts) => [...posts, { id: doc.id, ...doc.data() }]);
    // });

    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   // console.log(doc.id, " => ", doc.data());
    //   setPosts((posts) => [...posts, { id: doc.id, ...doc.data() }]);
    // });
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          // console.log("New city: ", change.doc.data());
          setPosts((posts) => [
            ...posts,
            { id: change.doc.id, ...change.doc.data() },
          ]);
        }
        if (change.type === "modified") {
          console.log("Modified city: ", change.doc.data());
          setPosts((posts) => [
            ...posts,
            { id: change.doc.id, ...change.doc.data() },
          ]);
        }
        if (change.type === "removed") {
          // console.log("Removed city: ", change.doc.data());
        }
      });
  })
    //  const q = query(collection(db, "posts"));
    // const unsubscribe = onSnapshot(q, (snapshot) => {
    //    console.log(snapshot);
    //    snapshot.docChanges().forEach((change) => {
    //       setPosts((posts) => [
    //         ...posts,
    //         { ...change.doc.data() },
    //       ]);
    //  if (change.type === "added") {
    //    console.log("New city: ", change.doc.data());
    //  }
    //  if (change.type === "modified") {
    //    console.log("Modified city: ", change.doc.data());
    //  }
    //  if (change.type === "removed") {
    //    console.log("Removed city: ", change.doc.data());
    //  }
    //    });
    //  });
    // const unsub = onSnapshot(collection(db, "posts" ), (doc) => {

    // });
  } catch (error) {
    console.error("post", error);
  }
}



  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#fff" }}>
        <UserInfo {...userInfo} />
        <FlatList
          data={posts}
          renderItem={(post) => <Post {...post.item} navigation={navigation} />}
        />
      </View>
    </>
  );
};

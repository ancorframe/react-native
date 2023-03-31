import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PostImage } from "../commonComponent/PostImage/PostImage";

import {
  CommentText,
  CommentTime,
  CommentWrap,
  Input,
  UserImg,
  SubmitButton,
} from "./CommentsScreen.styled";
import Arrow from "../../img/Vector.svg";
import { Comment } from "./Comment";
import { getFirestore, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { user } from "../../redux/selectors/authSelector";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";
import { db } from "../../firebase/config";

export const CommentsScreen = ({ route }) => {
  const { params } = route;
  const [post, setPost] = useState(null);
  const { nickname, avatar } = useSelector(user);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // console.log('aervervr',params);
  // useEffect(() => {
  //   if (params) {
  //     setPost(params);
  //   }
  // }, []);

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      setIsShowKeyboard(false);
    });
    return () => {
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // const postRef = doc(db, "posts", params.id);
        // const postSnapshot = await getDoc(postRef);

        // const comments = postSnapshot.get("comments");
        // // console.log('comments',comments);
        // setPost(comments);

        // const q = query(collection(db, "posts"));
        // const unsubscribe = onSnapshot(q, (snapshot) => {
        //   snapshot.docChanges().forEach((change) => {
        //     // setPost()
        //     if (change.type === "added") {
        //       console.log("New city: ", change.doc.data());
        //     }
        //     if (change.type === "modified") {
        //       console.log("Modified city: ", change.doc.data());
        //     }
        //     if (change.type === "removed") {
        //       console.log("Removed city: ", change.doc.data());
        //     }
        //   });
        // });
      } catch (error) {
        console.error("post", error);
      }
    })();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comment: "",
    },
    //    resolver: yupResolver(PostSchema),
  });
  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const onSubmit = async (data) => {
    // const body = createFormData(avatar, data);
    // console.log(data);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const comment = {
      ...data,
      author: nickname,
      date: formattedDate,
      avatar: avatar,
      id: Date.now(),
    };
    try {
      const postRef = doc(db, "posts", params.id);
      const updateData = {
        comments: [...post, comment],
      };

      await updateDoc(postRef, updateData);
       resetField("comment");
    } catch (error) {
      console.error("coment", error);
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          //   marginTop: 50,
          backgroundColor: "#fff",
        }}
      >
        {!isShowKeyboard && (
          <>
            {post && (
              <PostImage
                source={{ uri: params.image }}
                style={{ marginVertical: 32 }}
              />
            )}
          </>
        )}
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <>
            {post && (
              <FlatList
                data={post}
                renderItem={(post) => (
                  <Comment {...post.item} nickname={nickname} />
                )}
              />
            )}
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={{ position: "relative", paddingBottom: 16 }}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Коментувати..."
                      error={errors.login}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      onFocus={() => setIsShowKeyboard(true)}
                    />
                  )}
                  name="comment"
                />
                <SubmitButton onPress={handleSubmit(onSubmit)}>
                  <Arrow />
                </SubmitButton>
              </View>
            </KeyboardAvoidingView>
          </>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

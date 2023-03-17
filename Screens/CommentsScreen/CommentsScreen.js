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

const IMAGENAME = require("../../assets/adaptive-icon.png");

const comments = [
  {
    type: "comment",
    avatar: IMAGENAME,
    comment: `Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!`,
    time: "09 июня, 2020 | 08:40",
  },
  {
    type: "answer",
    avatar: IMAGENAME,
    comment: `Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!`,
    time: "09 июня, 2020 | 08:40",
  },
  {
    type: "comment",
    avatar: IMAGENAME,
    comment: `Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!`,
    time: "09 июня, 2020 | 08:40",
  },
  {
    type: "answer",
    avatar: IMAGENAME,
    comment: `Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!`,
    time: "09 июня, 2020 | 08:40",
  },
  {
    type: "comment",
    avatar: IMAGENAME,
    comment: `Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!`,
    time: "09 июня, 2020 | 08:40",
  },
];

export const CommentsScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      setIsShowKeyboard(false);
    });
    return () => {
      hideSubscription.remove();
    };
  }, []);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      connemt: "",
    },
    //    resolver: yupResolver(PostSchema),
  });
  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const onSubmit = (data) => {
    const body = createFormData(avatar, data);
    console.log(body);
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
          <PostImage source={IMAGENAME} style={{ marginVertical: 32 }} />
        )}
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <>
            <FlatList
              data={comments}
              renderItem={(comment) => <Comment {...comment.item} />}
            />
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

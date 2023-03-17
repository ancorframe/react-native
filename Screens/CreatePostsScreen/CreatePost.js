import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PostImage } from "../commonComponent/PostImage/PostImage";
import {
  ButtonImg,
  CameraIcn,
  ImgInfo,
  Input,
  WrapButton,
} from "./CreatePostScreen.styled";
import LocationIcon from "../../img/map-pin.svg";

import { SubmitButton } from "../commonComponent/SubmitButton/SubmitButton";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as ImagePicker from "expo-image-picker";
import { createFormData } from "../../helpers/createFormData";
import { PostSchema } from "../../helpers/validationShemas";

export const CreatePost = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      setIsShowKeyboard(false);
    });
    return () => {
      hideSubscription.remove();
    };
  }, []);

  const handleChoosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setAvatar(result.assets[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      location: "",
    },
    resolver: yupResolver(PostSchema),
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
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
            marginTop: 50,
          }}
        >
          <TouchableWithoutFeedback onPress={keyboardHide}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  position: "relative",
                  marginBottom: 8,
                }}
              >
                <PostImage source={avatar && { uri: avatar.uri }} />
                <WrapButton>
                  <TouchableOpacity onPress={handleChoosePhoto}>
                    <ButtonImg select={avatar}>
                      <CameraIcn select={avatar} />
                    </ButtonImg>
                  </TouchableOpacity>
                </WrapButton>
              </View>
              <ImgInfo>Завантажте фото</ImgInfo>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Назва..."
                    error={errors.login}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                )}
                name="name"
              />
              <View
                style={{
                  position: "relative",
                  justifyContent: "center",
                  marginBottom: 32,
                }}
              >
                <LocationIcon
                  style={{
                    position: "absolute",
                  }}
                />
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      last
                      placeholder="Місцевість..."
                      error={errors.login}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      onFocus={() => setIsShowKeyboard(true)}
                    />
                  )}
                  name="location"
                />
              </View>
              <SubmitButton onPress={handleSubmit(onSubmit)}>
                Опублікувати
              </SubmitButton>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
};


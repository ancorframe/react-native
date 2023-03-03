import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  ImgButton,
  ImgWrap,
  Input,
  Title,
  Wrap,
} from "./RegistrationForm.styled";
import { SubmitButton } from "../commonComponent/SubmitButton/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import { ShowButton } from "../commonComponent/ShowButton/ShowButton";
import { createFormData } from "../../helpers/createFormData";
import { registerSchema } from "../../helpers/validationShemas";

export default RegistrationForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [securePswrd, setSecurePswrd] = useState(true);
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
      login: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
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
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Form>
            <Wrap>
              <Title>Реєстрація</Title>
              <ImgWrap>
                {avatar && (
                  <TouchableOpacity onPress={handleChoosePhoto}>
                    <Image
                      source={{ uri: avatar.uri }}
                      style={{ width: 120, height: 120, borderRadius: 16 }}
                    />
                  </TouchableOpacity>
                )}
                {!avatar && (
                  <ImgButton onPress={handleChoosePhoto}>
                    <AntDesign name="pluscircleo" color="#ff6c00" size={25} />
                  </ImgButton>
                )}
              </ImgWrap>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Логін"
                    error={errors.login}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                )}
                name="login"
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Адреса електронної пошти"
                    error={errors.email}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    onFocus={() => setIsShowKeyboard(true)}
                    keyboardType="email-address"
                  />
                )}
                name="email"
              />
              <View style={{ position: "relative" }}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      last
                      isShowKeyboard={isShowKeyboard}
                      placeholder="Пароль"
                      error={errors.password}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      onFocus={() => setIsShowKeyboard(true)}
                      secureTextEntry={securePswrd}
                    />
                  )}
                  name="password"
                />
                <ShowButton onPress={() => setSecurePswrd(!securePswrd)}>
                  Показати
                </ShowButton>
              </View>
            </Wrap>
            {!isShowKeyboard && (
              <View style={{ height: 164, paddingHorizontal: 16 }}>
                <SubmitButton onPress={handleSubmit(onSubmit)}>
                  Зареєструватись
                </SubmitButton>
              </View>
            )}
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

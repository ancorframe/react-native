import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Title, Wrap } from "./RegistrationForm.styled";
import { SubmitButton } from "../commonComponent/SubmitButton/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { ShowButton } from "../commonComponent/ShowButton/ShowButton";
// import { createFormData } from "../../helpers/createFormData";
import { registerSchema } from "../../helpers/validationShemas";
import { RedirectButton } from "../commonComponent/RedirectButton/RedirectButton";
import { UserImgChoose } from "../commonComponent/UserImgChoose/UserImgChoose";
import { register } from "../../redux/auth/operations";
// import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../../firebase/config";

export default RegistrationForm = ({ navigation }) => {
  const dispatch = useDispatch();
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

  // const uploadPhotoToServer = async () => {
  //   try {
  //     const response = await fetch(avatar);
  //     const file = await response.blob();
  //     const uniqueId = Date.now().toString();

  //     const storageRef = await ref(storage, `authImage/${uniqueId}`);
  //     await uploadBytes(storageRef, file);

  //     const processedPhoto = await getDownloadURL(storageRef);

  //     return processedPhoto;
  //   } catch (error) {
  //     console.error("log", error);
  //   }
  // };

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

  const onSubmit = async (data) => {
    try {
      await dispatch(register({ ...data, avatar }));
    } catch (error) {
      console.log("submit register", error);
    }
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
              <UserImgChoose avatar={avatar} setAvatar={setAvatar} />
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
                <RedirectButton onPress={() => navigation.navigate("Login")}>
                  Уже є акаунт? Вхід
                </RedirectButton>
              </View>
            )}
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

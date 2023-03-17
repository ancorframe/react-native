import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  Input,
  Title,
  Wrap,
} from "./RegistrationForm.styled";
import { SubmitButton } from "../commonComponent/SubmitButton/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { ShowButton } from "../commonComponent/ShowButton/ShowButton";
import { createFormData } from "../../helpers/createFormData";
import { registerSchema } from "../../helpers/validationShemas";
import { RedirectButton } from "../commonComponent/RedirectButton/RedirectButton";
import { UserImgChoose } from "../commonComponent/UserImgChoose/UserImgChoose";

export default RegistrationForm = ({ navigation }) => {
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

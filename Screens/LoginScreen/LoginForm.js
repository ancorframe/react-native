import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { SubmitButton } from "../commonComponent/SubmitButton/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { ShowButton } from "../commonComponent/ShowButton/ShowButton";
import { createFormData } from "../../helpers/createFormData";
import { loginSchema } from "../../helpers/validationShemas";
import { Form, Input, Title, Wrap } from "./LoginForm.styled";
import { RedirectButton } from "../commonComponent/RedirectButton/RedirectButton";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default RegistrationForm = ({ navigation }) => {
   const dispatch = useDispatch();

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
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const onSubmit = (data) => {
    // const body = createFormData(avatar, data);
    // console.log(data);
     dispatch(login(data));
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Form>
            <Wrap>
              <Title>Вхід</Title>
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
              <View style={{ height: 230, paddingHorizontal: 16}}>
                <SubmitButton onPress={handleSubmit(onSubmit)}>
                  Вхід
                </SubmitButton>
                <RedirectButton
                  onPress={() => navigation.navigate("Registration")}
                >
                  Немає акаунта? Зареєструватися
                </RedirectButton>
              </View>
            )}
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

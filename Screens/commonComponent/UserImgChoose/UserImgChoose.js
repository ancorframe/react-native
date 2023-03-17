import { Img, ImgButton, ImgSkeleton, ImgWrap } from "./UserImgChoose.styled";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity, View } from "react-native";

export const UserImgChoose = ({ avatar, setAvatar }) => {
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

  return (
    <>
      <ImgWrap>
        <TouchableOpacity onPress={handleChoosePhoto}>
          {avatar ? <Img source={{ uri: avatar.uri }} /> : <ImgSkeleton />}
          {!avatar && (
            <ImgButton onPress={handleChoosePhoto}>
              <AntDesign name="pluscircleo" color="#ff6c00" size={25} />
            </ImgButton>
          )}
        </TouchableOpacity>
        {avatar && (
          <ImgButton onPress={() => setAvatar(null)}>
            <AntDesign name="closecircleo" color="#BDBDBD" size={25} />
          </ImgButton>
        )}
      </ImgWrap>
    </>
  );
};

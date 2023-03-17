import { createStackNavigator } from "@react-navigation/stack";
import { CreatePost } from "./CreatePost";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ReturnButton } from "../commonComponent/ReturnButton/ReturnButton";


const NestedScreen = createStackNavigator();

export const CreatePostsScreen = ({ navigation, route }) => {
  return (
    <>
      <NestedScreen.Navigator initialRouteName="CreatePost">
        <NestedScreen.Screen
          name="CreatePost"
          component={CreatePost}
          options={({ navigation, route }) => ({
            title: "Створити публікацію",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={ReturnButton}>
                <Item
                  title="Back"
                  iconName="arrow-back"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />
      </NestedScreen.Navigator>
    </>
  );
};

import { createStackNavigator } from "@react-navigation/stack";
import { CommentsScreen } from "../CommentsScreen/CommentsScreen";
import { Posts } from "./Posts";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { LogoutButton } from "../commonComponent/LogoutButton/LogoutButton";
import { MapScreen } from "../MapScreen/MapScreen";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { TouchableOpacity } from "react-native";

const NestedScreen = createStackNavigator();

export const PostsScreen = () => {
    const dispatch = useDispatch();
  return (
    <>
      <NestedScreen.Navigator initialRouteName="Posts">
        <NestedScreen.Screen
          name="Posts"
          component={Posts}
          options={{
            title: "Публікації",

            headerRight: () => (
              <TouchableOpacity onPress={() => {
                  console.log("logout");
                  dispatch(logout());
                 
                }}>
              <HeaderButtons
                HeaderButtonComponent={LogoutButton}
                
              >
                <Item title="Logout" iconName="log-out" />
              </HeaderButtons></TouchableOpacity>
            ),
          }}
        />
        <NestedScreen.Screen
          name="Comments"
          component={CommentsScreen}
          options={{ title: "Коментарі" }}
        />
        <NestedScreen.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "map" }}
        />
      </NestedScreen.Navigator>
    </>
  );
};

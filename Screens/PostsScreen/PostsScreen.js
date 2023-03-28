import { createStackNavigator } from "@react-navigation/stack";
import { CommentsScreen } from "../CommentsScreen/CommentsScreen";
import { Posts } from "./Posts";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { LogoutButton } from "../commonComponent/LogoutButton/LogoutButton";
import { MapScreen } from "../MapScreen/MapScreen";

const NestedScreen = createStackNavigator();

export const PostsScreen = () => {
  return (
    <>
      <NestedScreen.Navigator initialRouteName="Posts">
        <NestedScreen.Screen
          name="Posts"
          component={Posts}
          options={{
            title: "Публікації",

            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={LogoutButton}>
                <Item
                  title="Logout"
                  iconName="log-out"
                  onPress={() => {
                    console.log("logout");
                  }}
                />
              </HeaderButtons>
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

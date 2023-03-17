import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostScreen";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import PostsIcon from "../../img/grid.svg";
import CreatePostIcon from "../../img/Union.svg";
import ProfileIcon from "../../img/user.svg";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      backBehavior="history"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 9,
          paddingBottom: 34,
          height: 83,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarItemStyle: {
          height: 40,
          maxWidth: 70,
          marginHorizontal: 8,
        },
      }}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ navigation, route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => <PostsIcon />,
          tabBarBadgeStyle: { backgroundColor: "#000" },
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (routeName === "Comments") {
              return { display: "none" };
            }
            return {
              paddingTop: 9,
              paddingBottom: 34,
              height: 83,
              justifyContent: "center",
              alignItems: "center",
            };
          })(route),
        })}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation, route }) => ({
          tabBarStyle: { display: "none" },
          headerShown: false,
          title: "Створити публікацію",
          tabBarIcon: ({ focused }) => (
            <>
              <View
                style={{
                  backgroundColor: "#FF6C00",
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CreatePostIcon style={{ color: "#fff" }} />
              </View>
            </>
          ),
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

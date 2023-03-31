import { TouchableOpacity, View } from "react-native";
import LocationIcon from "../../../img/map-pin.svg";
import LikeIcon from "../../../img/Shape.svg";
import { PostImage } from "../PostImage/PostImage";
import {
  CommentIcn,
  PostComments,
  PostLocation,
  PostName,
} from "./Post.styled";

export const Post = ({ widthLikes, ...props }) => {
  const { image, name, comments, location, likes, navigation } = props;
  return (
    <>
      <View
        style={{
          marginBottom: 32,
        }}
      >
        <PostImage
          style={{
            marginBottom: 8,
          }}
          source={{ uri: image }}
        />
        <PostName>{name}</PostName>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Comments", { ...props })
              }
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CommentIcn comments={comments} />
              <PostComments>{comments.length}</PostComments>
            </TouchableOpacity>
            {widthLikes && (
              <View
                style={{
                  marginLeft: 24,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <LikeIcon style={{ marginRight: 10 }} />
                <PostComments>{likes}</PostComments>
              </View>
            )}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Map", { location: location })}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <LocationIcon style={{ marginRight: 8 }} />
            <PostLocation>{location.locationName}</PostLocation>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

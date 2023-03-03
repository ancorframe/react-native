export const createFormData = (photo, body = {}) => {
  const data = new FormData();
  if (photo) {
    data.append("photo", {
      name: photo.fileName ? photo.fileName : "Avatar",
      type: photo.type,
      uri: Platform.OS === "ios" ? photo.uri.replace("file://", "") : photo.uri,
    });
  }
  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });
  return data;
};

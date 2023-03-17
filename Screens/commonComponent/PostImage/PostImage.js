import { Img } from "./PostImage.styled";

export const PostImage = ({source,...props}) => {
    return (
      <>
        <Img {...props} source={source} />
      </>
    );
}
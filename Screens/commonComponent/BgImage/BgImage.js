import { BgImg } from "./BgImage.styled";

export const BgImage = ({children}) => {
  return (
    <>
      <BgImg source={require("../../../assets/img/PhotoBG.png")} >{children }</BgImg>
    </>
  );
};

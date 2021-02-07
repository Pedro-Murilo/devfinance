import Lottie from "react-lottie";
import { HeaderContainer, AnimationLoad, EasterEgg } from "./HeaderStyles";
import animationData from '../../lottie/lf30_money-rain.json';

const HeaderAnimation = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <AnimationLoad>
        <Lottie
          className="loading-rain"
          options={defaultOptions}
          height={240}
          width={"100%"}
        />
      </AnimationLoad>
    );
  };

const Header = () => {
  return (
    <HeaderContainer>
      <h1>dev.finance$</h1>
      <EasterEgg>You found me :D</EasterEgg>
      {HeaderAnimation()}
    </HeaderContainer>
  );
};

export default Header;

import { useEffect } from "react";
import AboutList from "./components/AboutList/AboutList";
import BurgerMenu from "./components/BugerMenu/BurgerMenu";
import Feedback from "./components/Feedback/Feedback";
import GridPics from "./components/GridPics/GridPics";
import HeaderDashBoard from "./components/HeaderDashBoard/HeaderDashBoard";
import Intro from "./components/Intro/Intro";
import Logo from "./components/Logo/Logo";
import NavList from "./components/NavList/NavList";
import ServiceList from "./components/ServiceList/ServiceList";
import SocNet from "./components/SocNet/SocNet";
import { useToggle } from "./hooks/useToggle";
import BurgerPortal from "./layouts/BurgerPortal/BurgerPortal";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const App: React.FC = () => {
  const { openShare, isShare, closeShare } = useToggle();

 useEffect(() => {
    if (isShare) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isShare]);

  return (
    <div onClick={isShare ? closeShare : undefined}>
      {isShare && (
        <BurgerPortal>
          <BurgerMenu />
        </BurgerPortal>
      )}
      <Header>
        <HeaderDashBoard openShare={openShare} />
        <Intro />
      </Header>
      <SharedLayout>
        <AboutList />
        <ServiceList />
        <Feedback />
        <GridPics />
      </SharedLayout>
      <Footer>
        <Logo layout="footer" />
        <NavList layout="footer" />
        <SocNet />
      </Footer>
    </div>
  );
};

export default App;

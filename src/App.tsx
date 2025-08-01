import AboutList from "./components/AboutList/AboutList";
import Feedback from "./components/Feedback/Feedback";
import GridPics from "./components/GridPics/GridPics";
import HeaderDashBoard from "./components/HeaderDashBoard/HeaderDashBoard";
import Intro from "./components/Intro/Intro";
import Logo from "./components/Logo/Logo";
import NavList from "./components/NavList/NavList";
import ServiceList from "./components/ServiceList/ServiceList";
import SocNet from "./components/SocNet/SocNet";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const App: React.FC = () => {
  return (
    <div>
      <Header>
        <HeaderDashBoard />
        <Intro />
      </Header>
      <SharedLayout>
        <AboutList />
        <ServiceList />
        <Feedback />
        <GridPics/>
      </SharedLayout>
      <Footer>
        <Logo layout="footer"/>
        <NavList layout="footer"/>
        <SocNet/>
      </Footer>
    </div>
  );
};

export default App;

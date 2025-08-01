import AboutList from "./components/AboutList/AboutList";
import Feedback from "./components/Feedback/Feedback";
import GridPics from "./components/GridPics/GridPics";
import HeaderDashBoard from "./components/HeaderDashBoard/HeaderDashBoard";
import Intro from "./components/Intro/Intro";
import ServiceList from "./components/ServiceList/ServiceList";
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
    </div>
  );
};

export default App;

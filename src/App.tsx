import AboutList from "./components/AboutList/AboutList";
import HeaderDashBoard from "./components/HeaderDashBoard/HeaderDashBoard";
import Intro from "./components/Intro/Intro";
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
      </SharedLayout>
    </div>
  );
};

export default App;

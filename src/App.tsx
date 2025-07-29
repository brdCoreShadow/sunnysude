import HeaderDashBoard from "./components/HeaderDashBoard/HeaderDashBoard"
import Intro from "./components/Intro/Intro"
import Header from "./layouts/Header/Header"

const App:React.FC = () => {

  return (
    <div>
     <Header>
      <HeaderDashBoard/>
      <Intro/>
     </Header>
    </div>
  )
}

export default App

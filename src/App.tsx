import HeaderDashBoard from "./components/HeaderDashBoard/HeaderDashBoard"
import Header from "./layouts/Header/Header"

const App:React.FC = () => {

  return (
    <div>
     <Header>
      <HeaderDashBoard/>
     </Header>
    </div>
  )
}

export default App

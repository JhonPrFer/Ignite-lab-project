import { gql, useQuery } from "@apollo/client"
import { Header } from "./components/Header/Header"
import { SideBar } from "./components/SideBar/SideBar"
import { Video } from "./components/Video/Video"
import { Event } from "./pages/Event"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <SideBar />
      </main>
    </div>
  )
}

export default App

import BottomNav from "./BottomNav"
import Mine from "./Mine"
import ProfileBar from "./ProfileBar"

const App = () => {
  return (
    <div className="xl:w-[30%] lg:w-[50%] md:w-[70%] w-full h-screen bg-gradient-to-t from-[#0b0c0e] to-[#00446d] flex flex-col justify-between my-0 mx-auto px-5 py-3">
    <ProfileBar />
    <Mine />
    <BottomNav />
  </div>
  )
}

export default App
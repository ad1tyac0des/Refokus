import './fonts.css';
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 font-[Satoshi] text-white">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App

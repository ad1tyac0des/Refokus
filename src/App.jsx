import './fonts.css';
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Blocks from './components/Blocks';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 font-[Satoshi] text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Blocks />
      <Footer />
    </div>
  )
}

export default App

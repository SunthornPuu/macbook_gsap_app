import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";

const App = () => {
  return (
    <main className="bg-black h-screen overflow-hidden">
      <Navbar />
      <div className="h-screen w-screen p-0 m-0 overflow-y-scroll">
        <Hero />
        <ProductViewer />
      </div>
    </main>
  );
};

export default App;


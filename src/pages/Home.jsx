import CryptoTaxCalculator from "../components/CryptoTaxCalculator";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="bg-default-gray min-h-screen">
      <Navbar />
      <CryptoTaxCalculator />
    </section>
  );
};
export default Home;

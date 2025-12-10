import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import MainListLayout from "./component/MainListLayout";
import NavBar from "./component/NavBar";
export default function Home({ searchParams }) {
  return (
    <div className="h-dvh">
      <NavBar />
      <Carousel />
      <MainListLayout searchParams={searchParams} />
      <Footer />
    </div>
  );
}

import Carousel from "./component/Carousel";
import MainListLayout from "./component/MainListLayout";
import NavBar from "./component/NavBar";
export default function Home({ searchParams }) {
  return (
    <div>
      <NavBar />
      <Carousel />
      <MainListLayout searchParams={searchParams} />
    </div>
  );
}

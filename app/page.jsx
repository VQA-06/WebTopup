import Carousel from "./component/Carousel";
import Category from "./component/Categroy";
import NavBar from "./component/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Category />
    </div>
  );
}

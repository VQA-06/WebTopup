import Carousel from "./component/Carousel";
import GameList from "./component/GameList";
import NavBar from "./component/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <GameList />
    </div>
  );
}

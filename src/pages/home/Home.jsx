import { useState } from "react";
import Menu from "../../components/menu/Menu";
import {MENU_CONTENT} from "../../constants/menu_content"

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <h1>THE PLANETS</h1>
      <div onClick={() => setShowMenu(!showMenu)}>Menu</div>
      <div>
      {showMenu && <Menu planets={MENU_CONTENT} />}
        <img src="/assets/all-planets.png"/>
      </div>
    </>
  );
};
export default Home;

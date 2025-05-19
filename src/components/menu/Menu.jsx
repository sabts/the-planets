import {MENU_CONTENT} from "../../constants/menu_content"

const Menu = () => {
  return <>
    <section>
    <h1>tHE PLANETS</h1>
    <div>icono de menu de hamburgesa</div>
    </section>
    <section>
    <div>
        {MENU_CONTENT.map((planet) => (
          <Link
            key={planet}
            to={planet.link}
          >
             <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: planet.color
                }}
              />
            {planet.name}
          </Link>
        ))}
      </div>
    </section>
  </>;
};
export default Menu;

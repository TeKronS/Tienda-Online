import { cityOfVenezuela } from "./../../../../cityOfVenezuela";

export const Location = ({ filterResult }) => {
  function handleClick(e) {
    const child = e.target.nextSibling;
    if (child.style.display === "" || child.style.display === "none") {
      child.style.display = "block";
    } else {
      child.style.display = "none";
    }
  }

  function changeLocation(e) {
    const city = e.target.value;
    filterResult({ city: city });
  }

  return (
    <section>
      <h3 style={{ cursor: "pointer" }} onClick={handleClick}>
        Ubicación
      </h3>
      <div style={{ display: "none" }}>
        {cityOfVenezuela.map((location, key) => {
          return (
            <label key={key} htmlFor={location}>
              {location}
              <input
                onChange={changeLocation}
                id={location}
                value={location}
                type={"checkbox"}
              />
            </label>
          );
        })}
      </div>
    </section>
  );
};

export const Location = () => {
  function handleClick(e) {
    const child = e.target.nextSibling;
    console.log(child.style);
    if (child.style.display === "" || child.style.display === "none") {
      child.style.display = "block";
    } else {
      child.style.display = "none";
    }
  }
  return (
    <section>
      <h3 style={{ cursor: "pointer" }} onClick={handleClick}>
        Ubicación
      </h3>
      <div style={{ display: "none" }}>
        {state.map((location, key) => {
          return (
            <label key={key} htmlFor={location}>
              {location}
              <input id={location} value={location} type={"checkbox"} />
            </label>
          );
        })}
      </div>
    </section>
  );
};

const state = [
  "Amazonas",
  "Anzoategui",
  "Apure",
  "Aragua",
  "Barinas",
  "Bolívar",
  "Carabobo",
  "Cojedes",
  "Delta Amacuro",
  "Distrito Capital",
  "Falcón",
  "Guárico",
  "Lara",
  "Mérida",
  "Miranda",
  "Monagas",
  "Nueva Esparta",
  "Portuguesa",
  "Sucre",
  "Táchira",
  "Trujillo",
  "La Guaira",
  "Yaracuy",
  "Zulia"
];

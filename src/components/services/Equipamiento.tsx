import "./equipamiento.css";

type Item = {
  id: number;
  name: string;
  image: string;
};

type EquipamientoProps = {
  icon: string;
  Items: Item[];
};

const Equipamiento = ({ icon, Items }: EquipamientoProps) => {
  return (
    <div className="container">
      <div className="first">
        <div className="icon-first">
          <img src={icon} alt="" />
        </div>
        <h2>Equipamiento para oficina</h2>
      </div>

      <div className="artis">
        {Items.map((it) => (
          <div className="artis-card" key={it.id}>
            <img src={it.image} alt={it.name} />
            <h3>{it.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipamiento;

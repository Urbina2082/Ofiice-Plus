import "./extraspoint.css";

type Item = {
  label: string;
};

type ExtrasPointProps = {
  icon?: string;
  title: string;
  items: Item[];
  variant: "chips" | "list";
};

function ExtrasPoint({ title, items, variant, icon }: ExtrasPointProps) {
  return (
    // contenedor principal
    <div className="info-block">
      <div className="icon-info">
        <img src={icon} alt="" />
      </div>
      <h2>{title}</h2>

      {variant === "chips" ? (
        <div className="chips-container">
          {items.map((item) => (
            <span key={item.label} className="chip">
              {item.label}
            </span>
          ))}
        </div>
      ) : (
        <ul className="list-container">
          {items.map((item) => (
            <li key={item.label} className="list-item">
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExtrasPoint;

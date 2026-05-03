import "./CardsHome.css"

  type Props = {
        img: string;
        icon: string;
        title: string;
        description: string;
    }


export const CardsHome = ({img,icon,title,description} :Props )=> {
  return (
    <div className="services-card">
      <div className="services-card-img placeholder">
        <img src={img} alt="" />
      </div>
      <div className="services-card-icon">
        <img src={icon} alt="" />
      </div>
      <h3 className="services-card-h3">{title}</h3>
      <p className="services-card-p">
        {description}
      </p>
    </div>
  );
};

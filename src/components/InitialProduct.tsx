import "../styles/Init.css"

type headerProps = {
  title:string,
  description: string
}

export const InitialProduct = ({title, description}:headerProps) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{description}</p>
      
    </div>
  );
};

import './dadosrapidosModules.css';

// Componente para exibir informações em cards com ícones e títulos personalizados
const CardDados = ({ icon, title, subtitle }) => {
  return (
    <div className="card-dados-rapidos">
      <div className="card-dados">
        <div className="titulo-subtitulo">
          {title && <h5 className="card-title">{title}</h5>}
          {subtitle && <h4 className="card-subtitulo">{subtitle}</h4>}
        </div>
        {icon && <i className="icone-card">{icon}</i>}
      </div>
    </div>
  );
};

export default CardDados;

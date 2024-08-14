/* eslint-disable react/prop-types */

const Jumbotron = ({
  presentation: {
    subtitle,
    description,
    contactBtnTitle,
    portfolioBtnTitle,
    fotoSrc,
    altFoto,
  },
}) => {
  return (
    <section className="section">
      <div className="section-container">
        <div className="content">
          <p className="subtitle">{subtitle}</p>
          <h1 className="title">
            Soy <span>Lucy Jimenez</span> desarrolladora Frontend
          </h1>
          <p className="description">{description}</p>
          <div className="action-btns">
            <button className="primary-btn">{contactBtnTitle}</button>
            <button className="secondary-btn">{portfolioBtnTitle}</button>
          </div>
        </div>
        <div className="image">
          <img src={fotoSrc} alt={altFoto} />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;

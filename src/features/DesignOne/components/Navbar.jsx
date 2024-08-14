/* eslint-disable react/prop-types */

const Navbar = ({ logo, titles }) => {
  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          <a href="#">{logo}</a>
        </div>
        <label htmlFor="check" className="checkbox">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" name="check" id="check" />

        <ul>
          {titles.map((title, index) => (
            <li key={index}>
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

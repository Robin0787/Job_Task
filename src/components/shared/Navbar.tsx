import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-[50px]">
      <section>
        <img src={logo} alt="logo" className="size-[60px] lg:size-[105px]" />
      </section>

      <section className="hidden xl:block">
        <ul className="flex justify-center items-center gap-[60px]">
          <li>
            <button className="navLink">Home</button>
          </li>
          <li>
            <button className="navLink">About Us</button>
          </li>
          <li>
            <button className="navLink">Services</button>
          </li>
          <li>
            <button className="navLink">Track Records</button>
          </li>
          <li>
            <button className="navLink">Media</button>
          </li>
          <li>
            <button className="navLink">Contacts</button>
          </li>
          <li>
            <button className="primaryBtn">Order Service</button>
          </li>
        </ul>
      </section>
      <section className="border xl:hidden">
        <button>Open</button>
      </section>
    </nav>
  );
};

export default Navbar;

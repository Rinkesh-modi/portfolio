export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#Work" className="nav-iteam">
          Work
        </a>
        <a href="#project" className="nav-iteam">
          Projects
        </a>
        <a href="#about" className="nav-iteam">
          About
        </a>
        <a
          href="#contact"
          className="nav-iteam bg-white font-bold text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

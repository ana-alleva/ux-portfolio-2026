export function Navbar() {
  return (
    <>
      <nav className="w-screen p-4 flex items-center justify-center">
        <ul className="flex gap-4 bg-white rounded-xl p-4 text-slate-800">
          <li>
            <a
              className="text-slate-900 py-2 px-4 transition-all duration-300 hover:bg-pink-500 hover:text-white rounded-md"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-slate-900 py-2 px-4 transition-all duration-300 hover:bg-pink-500 hover:text-white rounded-md"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-slate-900 py-2 px-4 transition-all duration-300 hover:bg-pink-500 hover:text-white rounded-md"
              href="#"
            >
              Featured Projects
            </a>
          </li>
          <li>
            <a
              className="text-slate-900 py-2 px-4 transition-all duration-300 hover:bg-pink-500 hover:text-white rounded-md"
              href="#"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="text-slate-900 py-2 px-4 transition-all duration-300 hover:bg-pink-500 hover:text-white rounded-md"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

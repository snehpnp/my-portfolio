// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
//       <h1 className="text-xl font-bold">Sneh Jaiswal</h1>
//       <div className="flex gap-4">
//         <Link to="/" className="hover:text-yellow-400">Home</Link>
//         <Link to="/about" className="hover:text-yellow-400">About</Link>
//         <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
//         <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
//       </div>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Sneh Jaiswal</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
        <Link to="/skills" className="hover:text-yellow-400">Skills</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
}

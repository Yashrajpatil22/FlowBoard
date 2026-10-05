function Navbar() {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-100 px-4">
      <div>FlowBoard</div>
      
        <ul className="flex gap-6">
          <li>Dashboard</li>
          <li>Tasks</li>
          <li>Projects</li>
          <li>Settings</li>
        </ul>
      
    </nav>
  );
}

export default Navbar;

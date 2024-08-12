import { Link, Outlet } from "react-router-dom";

const Layout = ()=> {
  return (
    <>
    <header>
      <nav>
        <Link to="/" className="nav-link">Home</Link> -|-|-
        <Link to="enter-numbers" className="nav-link">Make Binary Tree</Link> -|-|- 
        <Link to="previous-trees" className="nav-link">Previous Trees</Link>
      </nav>
      <Outlet />
    </header>
    </>
  )
}

export default Layout;
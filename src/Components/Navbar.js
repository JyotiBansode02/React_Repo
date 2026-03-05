import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <div>
            <nav style={{ marginBottom: "20px" }}>
          <Link to="/history" style={{ marginRight: "10px" }}>History</Link>
          <Link to="/teams" style={{ marginRight: "10px" }}>Teams</Link>
          <Link to="/register">Register</Link>
        </nav>
        </div>
    )
}
import Link from "next/link"
import { IoSearchOutline, IoCartOutline } from "react-icons/io5"
import '../../../../style/page.css'

export const TopMenu = () => {
    return (
        
        <header>
        <div className="container">
          {/* Sticky Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
              {/* Toggle Button for Mobile View */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navigation Links */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  {/* Hombre Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      href="/category/men"
                      className="nav-link dropdown-toggle"
                      id="hombreDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Hombre
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="hombreDropdown">
                      <li><Link href="/hombre/ropa" className="dropdown-item">Ropa</Link></li>
                      <li><Link href="/hombre/zapatos" className="dropdown-item">Zapatos</Link></li>
                      <li><Link href="/hombre/accesorios" className="dropdown-item">Accesorios</Link></li>
                    </ul>
                  </li>

                  {/* Mujer Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      href="/category/women"
                      className="nav-link dropdown-toggle"
                      id="mujerDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Mujer
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="mujerDropdown">
                      <li><Link href="/mujer/ropa" className="dropdown-item">Ropa</Link></li>
                      <li><Link href="/mujer/zapatos" className="dropdown-item">Zapatos</Link></li>
                      <li><Link href="/mujer/accesorios" className="dropdown-item">Accesorios</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Brand Name (Center) */}
              <div className="mx-auto">
                <Link href="/" className="navbar-brand text-center">
                  Valdez
                </Link>
              </div>

              {/* Search Bar */}
              <div className="d-flex">
                <Link href="/search">
                    <IoSearchOutline></IoSearchOutline>
                </Link>
                <Link href="/cart">
                    <span>

                    </span>
                    <IoCartOutline></IoCartOutline>
                </Link>
                <button>
                    Menu
                </button>

              </div>
            </div>
          </nav>
        </div>
      </header>
    )
}
'use client';

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import '../../../../style/page.css';
import useUIStore from "@/store/ui/ui-store";

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);

  return (
    <header>
      <div className="container-fluid px-3">
        {/* Sticky Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top py-2 shadow">
          <div className="container-fluid d-flex justify-content-between align-items-center">
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

            {/* Brand Name (Center) */}
            <Link href="/" className="navbar-brand fw-bold fs-4 mx-auto text-center">
              Valdez
            </Link>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {/* Hombre Dropdown */}
                <li className="nav-item dropdown">
                  <Link
                    href="/category/men"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                  >
                    Hombre
                  </Link>
                  {/* Submenu manually handled with Next.js */}
                  <div className="dropdown-menu">
                    <Link href="/hombre/ropa" className="dropdown-item">
                      Ropa
                    </Link>
                    <Link href="/hombre/zapatos" className="dropdown-item">
                      Zapatos
                    </Link>
                    <Link href="/hombre/accesorios" className="dropdown-item">
                      Accesorios
                    </Link>
                  </div>
                </li>

                {/* Mujer Dropdown */}
                <li className="nav-item dropdown">
                  <Link
                    href="/category/women"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                  >
                    Mujer
                  </Link>
                  {/* Submenu manually handled with Next.js */}
                  <div className="dropdown-menu">
                    <Link href="/mujer/ropa" className="dropdown-item">
                      Ropa
                    </Link>
                    <Link href="/mujer/zapatos" className="dropdown-item">
                      Zapatos
                    </Link>
                    <Link href="/mujer/accesorios" className="dropdown-item">
                      Accesorios
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Search Bar and Icons */}
            <div className="d-flex align-items-center gap-3">
              {/* Search Icon */}
              <Link href="/search" className="text-decoration-none text-dark">
                <IoSearchOutline size={24} />
              </Link>

              {/* Cart Icon */}
              <Link href="/cart" className="position-relative text-decoration-none text-dark">
                <IoCartOutline size={24} />
                {/* Badge for cart items */}
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.75rem" }}
                >
                  3
                  <span className="visually-hidden">items in cart</span>
                </span>
              </Link>

              {/* Menu Button */}
              <button
                className="btn btn-primary"
                type="button"
                onClick={openMenu} // Abrir el menú usando Zustand
              >
                Abrir Menú
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};


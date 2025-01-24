'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { IoPersonOutline, IoTicketOutline } from "react-icons/io5";
import useUIStore from "@/store/ui/ui-store";

export const Menu: React.FC = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  // Agregar un evento de clic para cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    if (isSideMenuOpen) {
      const handleOutsideClick = (e: MouseEvent) => {
        // Verificar si el clic fue fuera del menú
        const target = e.target as HTMLElement;
        if (!target.closest("#offcanvasMenu") && !target.closest(".btn-close")) {
          closeMenu();
        }
      };

      // Agregar el evento de clic
      document.addEventListener("click", handleOutsideClick);

      // Limpiar el evento al desmontar el componente
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [isSideMenuOpen, closeMenu]); // Ejecutar cuando isSideMenuOpen cambia

  return (
    <div>
      {/* Background Dimmer */}
      {isSideMenuOpen && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={closeMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
        ></div>
      )}

      {/* Offcanvas Menu */}
      <div
        className={`offcanvas offcanvas-end ${isSideMenuOpen ? "show" : ""}`}
        tabIndex={-1}
        id="offcanvasMenu"
        style={{ zIndex: 1050 }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            aria-label="Close"
            onClick={closeMenu}
          ></button>
        </div>
        <div className="offcanvas-body">
          <nav className="d-flex flex-column">
            <Link
              href="/"
              className="text-decoration-none d-flex align-items-center mb-3"
            >
              <IoPersonOutline size={30} className="me-2" />
              <span>Perfil</span>
            </Link>

            <Link
              href="/"
              className="text-decoration-none d-flex align-items-center"
            >
              <IoTicketOutline size={30} className="me-2" />
              <span>Ordenes</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;





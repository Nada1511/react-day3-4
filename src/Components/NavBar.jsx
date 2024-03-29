import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  mb-5">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/home">
            E-Commerce
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/add"
                >
                  Add Product
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/todos"
                >
                  To-DO 1
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/todostable"
                >
                  To-DO 2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

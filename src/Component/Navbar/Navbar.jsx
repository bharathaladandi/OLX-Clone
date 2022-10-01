import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavbarSecond = () => {
  const jobs = [
    "Data entry & Back office",
    "Sales & Marketing",
    "BPO & Telecaller",
    "Driver",
    "Office Assistant",
    "Delivery & Collection",
    "Teacher",
    "Cook",
    "Receptionist & Front office",
    "Operator & Technician",
    "IT Engineer & Developer",
    "Hotel & Travel Executive",
    "Accountant",
    "Designer",
    "Other Jobs",
  ];
  const bikes = ["Motorcycles", "Scooters", "pare Parts", "Bicycles"];
  const electronic = [
    "TVs, Video - Audio",
    "Kitchen & Other Appliances",
    "Computers & Laptops",
    "Cameras & Lenses",
    "Games & Entertainment",
    "Fridges",
    "Computer Accessories",
    "Hard Disks, Printers & Monitors",
    "ACs",
    "Washing Machines",
  ];
  const books = [
    "Books",
    "Gym & Fitness",
    "Musical Instruments",
    "Sports Equipment",
    "Other Hobbies",
  ];
  const furniture = [
    "Sofa & Dining",
    "Beds & Wardrobes",
    "Home Decor & Garden",
    "Kids Furniture",
    "Other Household Items",
  ];
  const pets = [
    "Fishes & Aquarium",
    "Pet Food & Accessories",
    "Dogs",
    "Other Pets",
  ];
  const services = [
    "    Electronics & Computer",
    "Education & Classes",
    "Drivers & Taxi",
    "Health & Beauty",
    "Other Services",
  ];

  const baseStyle = {
    color: "black",
  };

  const activeStyle = {
    color: "darkcyan",
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  shadow-sm"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      >
        <NavLink
          to="/"
          className="navbar-brand font-weight-bold d-block d-lg-none"
        >
          All Categories
        </NavLink>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler navbar-light"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarContent" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item dropdown megamenu onlelinehead">
              <NavLink
                id="megamneu"
                to="/"
                data-toggle="dropdown"
                // aria-haspopup="true"
                aria-expanded="false"
                className="nav-link dropdown-toggle font-weight-bold text-uppercase"
              >
                All Categories
              </NavLink>
              <div
                aria-labelledby="megamneu"
                className="dropdown-menu border-0 p-0 m-0"
              >
                <div className="container-fluid">
                  <div className="row bg-white rounded-0 m-0 shadow-sm">
                    <div className="col-lg-6 col-xl-6">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">OLX Autos (Cars)</h6>
                            <h6 className=" mt-5 h6heading">Properties</h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <Link
                                  to="/product/6"
                                  className="nav-link text-small pb-0"
                                >
                                  For Sale: Houses & Apartments
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/product/6"
                                  className="nav-link text-small pb-0"
                                >
                                  For Rent: Houses & Apartments
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/product/6"
                                  className="nav-link text-small pb-0"
                                >
                                  Lands & Plots
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/product/6"
                                  className="nav-link text-small pb-0"
                                >
                                  For Rent: Shops & Offices
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/product/6"
                                  className="nav-link text-small pb-0"
                                >
                                  For Sale: Shops & Offices
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/product/6"
                                  className="nav-link text-small pb-0"
                                >
                                  PG & Guest Houses
                                </Link>
                              </li>
                            </ul>
                            <div className="row">
                              <div className="col-12 mt-5">
                                <h6 className="h6heading">Mobiles</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link
                                      to="/product/2"
                                      className="nav-link text-small pb-0 "
                                    >
                                      Mobile Phones
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      to="/product/6"
                                      className="nav-link text-small pb-0 "
                                    >
                                      Accessories
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      to="/product/6"
                                      className="nav-link text-small pb-0 "
                                    >
                                      Tablets
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      to="/"
                                      className="nav-link text-small pb-0 "
                                    >
                                      Account
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className=" h6heading">Jobs</h6>
                            <ul className="list-unstyled">
                              {jobs.map((links) => (
                                <li className="nav-item" key={links}>
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <div className="row">
                              <div className="col-12 mt-4">
                                <h6 className="h6heading">Bikes</h6>
                                <ul className="list-unstyled">
                                  {bikes.map((links) => (
                                    <li className="nav-item" key={links}>
                                      <Link
                                        to="/product/1"
                                        className="nav-link text-small pb-0 "
                                      >
                                        {links}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 ">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">
                              Electronics & Appliances
                            </h6>
                            <ul className="list-unstyled">
                              {electronic.map((links) => (
                                <li className="nav-item" key={links}>
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">Fashion</h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Men
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Women
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Kids
                                </Link>
                              </li>
                            </ul>

                            <div className="row mt-5">
                              <div className="col-12">
                                <h6 className="h6heading">
                                  Books, Sports & Hobbies
                                </h6>
                                <ul className="list-unstyled">
                                  {books.map((links) => (
                                    <li className="nav-item" key={links}>
                                      <Link
                                        to="/"
                                        className="nav-link text-small pb-0 "
                                      >
                                        {links}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">
                              Commercial Vehicles & Spares
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Commercial & Other Vehicles
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Spare Parts
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading ">Pets</h6>
                            <ul className="list-unstyled">
                              {pets.map((links) => (
                                <li className="nav-item" key={links}>
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </Link>
                                </li>
                              ))}{" "}
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">Furniture</h6>
                            <ul className="list-unstyled">
                              {furniture.map((links) => (
                                <li className="nav-item" key={links}>
                                  <Link
                                    to="/product/6"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">Services</h6>
                            <ul className="list-unstyled">
                              {services.map((links) => (
                                <li className="nav-item" key={links}>
                                  <Link
                                    to="/"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/product/0"
                className="nav-link onlelinehead"
              >
                Cars
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/product/1"
                className="nav-link onlelinehead"
              >
                Motorcycle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/product/2"
                className="nav-link onlelinehead"
              >
                Mobile Phones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/product/3"
                className="nav-link onlelinehead"
              >
                For Sale: Houses & Apartments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/product/4"
                className="nav-link onlelinehead"
              >
                Scooters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/product/5"
                className="nav-link onlelinehead"
              >
                Commercial & Other Vehicles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/product/6"
                className="nav-link onlelinehead"
              >
                For Rent: Houses & Apartments
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

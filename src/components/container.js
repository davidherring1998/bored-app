import React, { useState } from "react";
import NavTab from "./navBar";
import Home from "./pages/homePage";
import Pictures from './pages/PicturePage'
// import Random from "./pages/randomPage"
// import Contact from "./pages/contactPage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("News");

  const renderPage = () => {
    if (currentPage === "News") {
      return <Home />;
    }
    if (currentPage === "Pictures") {
      return <Pictures />;
    }
    // if (currentPage === "Contact") {
    //   return <Contact />;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTab currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

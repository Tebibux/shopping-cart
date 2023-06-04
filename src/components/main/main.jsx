import React from "react";
import Catagories from "./childComponent/Catagories";

const Main = () => {
	return (
		<div className="container">
        <div className="sidebar-left">
          <Catagories />
        </div>
        <main className="content">Main Content</main>
        <div className="sidebar-right">Right Sidebar</div>
      </div>
	)
}

export default Main;
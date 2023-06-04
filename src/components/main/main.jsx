import React from "react";
import Catagories from "./childComponent/Catagories";
import Items from "./childComponent/Items";

const Main = () => {
	return (
		<div className="container">
        <div className="sidebar-left">
          <Catagories />
        </div>
        <main className="content">
          <Items />
          </main>
        <div className="sidebar-right">Right Sidebar</div>
      </div>
	)
}

export default Main;
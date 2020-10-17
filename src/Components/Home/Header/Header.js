import React from "react";
import "./Header.css";
import HeaderFrame from "../../../images/frame.png";

const Header = () => {
	return (
		<section className="Header-section pt-4">
			<div className="container">
				<div className="Header-content pt-5">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="Header-txt text-left pr-xl-5">
								<h2>Let’s Grow Your Brand To The Next Level</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis
									laoreet maecenas. Feugiat{" "}
								</p>
								<button className="btn btn-dark">Hire Us</button>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="Header-thumb">
								<img src={HeaderFrame} alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;

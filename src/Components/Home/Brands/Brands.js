import React from "react";
import "./Brands.css";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";

const Brands = () => {
	const brandsData = [
		{
			name: "slack",
			img: slack,
		},
		{
			name: "google",
			img: google,
		},
		{
			name: "uber",
			img: uber,
		},
		{
			name: "netflix",
			img: netflix,
		},
		{
			name: "airbnb",
			img: airbnb,
		},
	];

	return (
		<section className="brands-section py-lg-5 py-3 my-lg-5 my-0">
			<div className="container">
				<div className="brands-content pt-xl-4">
					{brandsData.map((brand) => (
						<img src={brand.img} alt={brand.name} key={brand.name} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Brands;

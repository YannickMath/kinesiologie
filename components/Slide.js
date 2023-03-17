import React from "react";
import Link from "next/link";
import styles from "../styles/Slide.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide(props) {
const { wikipedia } = props;

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
};

return (
<Slider {...settings}>
{Object.values(wikipedia).map((item, i) => (
<div key={i}>
<div className="flex justify-center">
<Link href="{wikipedia.item${i}}" className="w-2 h-2 m-5 rounded bg-gray-700"></Link>
{/* <Link href="/" className="w-2 h-2 m-5 rounded bg-gray-700"></Link>
<Link href="/" className="w-2 h-2 m-5 rounded bg-gray-700"></Link> */}
</div>
<p className={styles.phrase}>{item}</p>
</div>
))}
</Slider>
);
}
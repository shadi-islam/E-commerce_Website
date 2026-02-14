import Hero from "../components/layout/Hero";
import Categories from "../components/home/Categories";
import Menus from "../components/home/Menus";
import Testimonial from "../components/home/Testimonial";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-page">
      <Hero />
      <Categories />
      <Menus />
      <Testimonial />
    </section>
  );
}

import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          About Us <span className="text-orange-500">Page</span>
        </h2>
      </div>
      <AboutUs />
    </div>
  );
};
export default About;

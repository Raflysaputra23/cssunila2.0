import CircularGallery from "../scroll/CircularGallery";

const Sponsor = () => {
  return (
    <section className="max-w-[95%] lg:max-w-[85%] py-10 mx-auto">
      <h2
        id="contact"
        className="bg-slate-800 text-slate-200 py-2 px-3 rounded-md shadow inline-block"
      >
        Sponsor
      </h2>
      <section style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={1} textColor="#ffffff"/>
      </section>
    </section>
  );
};

export default Sponsor;

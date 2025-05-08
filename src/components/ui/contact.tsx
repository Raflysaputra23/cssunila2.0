import CircularText from "../text/CircularText";
import FormContact from "./formContact";

const Contact = () => {
  return (
    <section className="max-w-[95%] lg:max-w-[85%] py-10 mx-auto">
      <h2
        id="contact"
        className="bg-slate-800 text-slate-200 py-2 px-3 rounded-md shadow inline-block"
      >
        Contact
      </h2>
      <section className="mt-2 flex items-stretch gap-2 flex-wrap">
        <FormContact />
        <section className="w-[200px] flex-auto p-4 shadow rounded-md bg-slate-800 mt-2 flex items-center justify-center">
          <CircularText
            text="CSSUNILA20*HIMAKOM*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </section>
      </section>
    </section>
  );
};

export default Contact;

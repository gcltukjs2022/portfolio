import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ContactProps = {
  scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
  setCurrTab: React.Dispatch<React.SetStateAction<string>>;
};

const Contact: React.FC<ContactProps> = ({ scrollRef, setCurrTab }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setCurrTab("contact");
    }
  }, [inView]);

  const handleSubmit = async () => {};

  return (
    <section
      ref={scrollRef}
      id="contact"
      className="w-full p-6 pt-[108px] lg:pt-[128px] lg:px-12 bg-grey"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-y-20 ">
        <div className="flex flex-col justify-center gap-y-6 ">
          <h1 className="md:text-center text-2xl sm:text-3xl xl:text-4xl font-extrabold border-b-4 border-white text-white pb-4 md:pb-6 md:px-6 nd:max-w-max md:m-auto">
            CONTACT
          </h1>
          <p className="md:text-center text-lg xl:max-w-[60%] xl:m-auto text-white">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div
          className="bg-white w-full md:max-w-[80%] lg:max-w-[80%] m-auto px-8 py-12 shadow-2xl rounded-lg"
          ref={ref}
        >
          <form className="w-full flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <label>Name</label>
              <input
                className="p-6 bg-slate-200 h-[40px] rounded-lg"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label>Email</label>
              <input
                className="bg-slate-200 p-6 h-[40px] rounded-lg"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label>Message</label>
              <textarea
                className="bg-slate-200 p-6 h-[200px] rounded-lg resize-none"
                placeholder="Enter Your Message"
              />
            </div>
            <h1></h1>
            <button className="bg-grey p-4 text-white font-semibold rounded-lg">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

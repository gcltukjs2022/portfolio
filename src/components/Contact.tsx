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
      className="w-full bg-grey p-6 pt-[108px] lg:px-12 lg:pt-[128px]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-y-20 ">
        <div className="flex flex-col justify-center gap-y-6 ">
          <h1 className="nd:max-w-max border-b-4 border-white pb-4 text-2xl font-extrabold text-white sm:text-3xl md:m-auto md:px-6 md:pb-6 md:text-center xl:text-4xl">
            CONTACT
          </h1>
          <p className="text-lg text-white md:text-center xl:m-auto xl:max-w-[60%]">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div
          className="m-auto w-full rounded-lg bg-white px-8 py-12 shadow-2xl md:max-w-[80%] lg:max-w-[80%]"
          ref={ref}
        >
          <form className="flex w-full flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <label>Name</label>
              <input
                className="h-[40px] rounded-lg bg-slate-200 p-6"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label>Email</label>
              <input
                className="h-[40px] rounded-lg bg-slate-200 p-6"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label>Message</label>
              <textarea
                className="h-[200px] resize-none rounded-lg bg-slate-200 p-6"
                placeholder="Enter Your Message"
              />
            </div>
            <button className="rounded-lg bg-grey p-4 font-semibold text-white lg:w-[40%] lg:self-center">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

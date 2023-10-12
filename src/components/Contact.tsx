const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full p-3 lg:py-12 lg:pt-[168px] lg:px-12 bg-slate-300"
    >
      <div className="flex flex-col gap-y-12 ">
        <div className="flex flex-col justify-center gap-y-6 ">
          <h1 className="text-center text-4xl font-extrabold border-b-4 border-black pb-6 max-w-max m-auto">
            CONTACT
          </h1>
          <p className="text-center text-lg max-w-[60%] m-auto">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div className="bg-white w-full max-w-[60%] m-auto px-8 py-12 shadow-2xl rounded-lg">
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
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

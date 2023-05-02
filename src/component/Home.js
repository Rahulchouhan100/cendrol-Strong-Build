const Home = () => {
  return (
    <div className="bg-[#F3F2EF]">
      <div className="text-center px-3">
        <h1 className="text-3xl font-bold">
          Strong<span className="text-[#E98700] ">Build</span>
        </h1>
        <p className="text-xs text-[#494847] leading-2">
          Where Idea meets strength
        </p>
        <p className="mt-4 font-bold text-[#717171] text-sm">
          A platform which offers you a wide range of options that you require
          for your construction project.
        </p>
      </div>
      {/* --- container ---  */}
      <section className="border px-2 py-4 mt-4 mx-3 bg-white">
        <em className="text-[#E98700]">Looking to build? Look no further.</em>
        <p className="text-[#070707]">Our Platform connects you with our:</p>
        <div className="flex flex-col gap-y-3">
          <section className="flex items-center gap-2 mt-2">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.375 1.125H1.125V16.875H16.875V11.625"
                stroke="#E98700"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.625 8.625L9.375 12.375L18.375 2.625"
                stroke="#E98700"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Architect Partners</p>
          </section>
          <section className="flex items-center gap-2">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.375 1.125H1.125V16.875H16.875V11.625"
                stroke="#E98700"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.625 8.625L9.375 12.375L18.375 2.625"
                stroke="#E98700"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Construction Partners</p>
          </section>
          <section className="flex items-center gap-2">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.375 1.125H1.125V16.875H16.875V11.625"
                stroke="#E98700"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.625 8.625L9.375 12.375L18.375 2.625"
                stroke="#E98700"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Expert Advisors at every stage</p>
          </section>
          <p className="text-[#E98700] text-[.8rem] text-center">
            We take over the whole process and promise complete peace of mind at
            every stage.
          </p>
          <div className="text-center">
            <button className="border bg-[#E98700] text-white shadow-md py-2 rounded-md px-3">
              Connect with our experts Now!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

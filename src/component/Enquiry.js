const Enquiry = () => {
  return (
    <div className=" py-2  flex flex-col items-center justify-center gap-y-3 my-9  px-3">
      <div className="pt-4">
        <svg
          width="42"
          height="46"
          viewBox="0 0 42 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1725 0.126007L0 20.6656V33.0987L19.4866 26.6282L19.4563 36.2527L0.03935 42.7291V45.0622H42V20.5505L21.1725 0.126007ZM39.6149 21.6343V31.7018L22.6647 25.9342V23.6897L22.5861 5.29414L39.6149 21.6343ZM2.32459 21.8735L19.42 5.33547V23.6986L2.32459 29.5371V21.8735ZM6.8648 42.7291L19.4351 38.4529V42.7291H6.8648ZM39.6694 42.7291H22.6526V28.849L39.6754 34.5694L39.6694 42.7291Z"
            fill="#070707"
          />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-[#494847] text-center">
        Have a <span className="text-[#E98700]">question</span> or an
        <span className="text-[#E98700]"> enquiry</span>?
      </h1>
      <p className="text-center text-[#717171] font-semibold">
        Get in touch with us and we will provide you with all possible
        assistance.
      </p>
    </div>
  );
};

export default Enquiry;

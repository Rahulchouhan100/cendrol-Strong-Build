import buildingPng from "../component/assest/rectangle.png";
import constructionPng from "../component/assest/construction.png";
import architectPng from "../component/assest/architects.png";
import housePng from "../component/assest/building.png";

const Design = () => {
  return (
    <div className="px-2 flex flex-col gap-y-6 bg-[#F3F2EF] py-14">
      <div className="flex justify-center items-center">
        <div className="basis-2/4 ">
          <img src={buildingPng} alt="buildingPng" />
        </div>
        <div className="border basis-2/3 -ml-9 p-3 bg-white h-28 rounded-2xl shadow-lg">
          <h5 className="text-center text-[#494847] font-semibold">DESIGN</h5>
          <p className="text-[.5rem] text-[#717171]">
            At StrongBuild, we pride ourselves on our innovative and practical
            approach to design. Our design team is committed to offering clients
            specialised solutions that fit their particular needs and budgetary
            limitations.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className=" basis-2/3 border -mr-20 z-40 bg-white  h-[7.4rem] rounded-2xl shadow-lg p-3 mt-[2.4px]">
          <h5 className="text-center text-[#494847] font-semibold">
            CONSTRUCTION
          </h5>
          <p className="text-[.5rem] text-[#717171]">
            At StrongBuild, we keep our clients updated at every stage of the
            construction process because we feel that effective communication is
            essential to a project's success. We collaborate closely with
            clients to ensure their vision is realized.
          </p>
        </div>
        <div className="basis-2/4 z-30">
          <img src={constructionPng} alt="constructionPng" />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="basis-2/4">
            <img src={architectPng} alt="architectPng" />
          </div>
          <div className="border basis-2/3 -ml-9 px-3 py-2 bg-white h-28 rounded-2xl shadow-lg">
            <h5 className="text-center text-[#494847] font-semibold">
              ARCHITECTS
            </h5>
            <p className="text-[.5rem] text-[#717171]">
              Our team of highly qualified and experienced architects at
              StrongBuild is committed to providing our clients with excellent
              results. Our architects collaborate closely with our construction
              team to satify all the client’s preferences.
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" basis-2/3 border -mr-20 z-40 bg-white  h-[7.4rem] rounded-2xl shadow-lg p-3 mt-[2.4px]">
          <h5 className="text-center text-[#494847] font-semibold">
            MODERN METHODS
          </h5>
          <p className="text-[.5rem] text-[#717171]">
            We're committed to staying up-to-date with the latest trends and
            techniques in construction. We believe that in using modern
            construction practices to meet the unique needs of our clients. We
            also believe in promoting sustainability.
          </p>
        </div>
        <div className="basis-2/4 z-30">
          <img src={housePng} alt="housePng" />
        </div>
      </div>
    </div>
  );
};

export default Design;

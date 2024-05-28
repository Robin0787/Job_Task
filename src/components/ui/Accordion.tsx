import { IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  return (
    <div className="collapse collapse-arrow  bg-[#EAEBED] rounded-[20px]">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title p-0">
        <div className="w-full relative flex justify-between items-center pt-3 lg:pt-0">
          <h1 className="accordionTitle">2011 Track Record</h1>
          <button className="z-10 bg-[#EAEBED] p-1 lg:p-3 relative right-4">
            <IoIosArrowDown className="size-[20px] lg:size-[25px]" />
          </button>
        </div>
      </div>
      <div className="collapse-content p-0">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#441355]  w-full rounded-[10px]!important ">
                <th
                  colSpan={2}
                  className="accordionHeading py-[13px] pl-[15px] lg:pl-[25px]"
                >
                  Status
                </th>
                <th colSpan={2} className="accordionHeading">
                  Date
                </th>
                <th colSpan={3} className="accordionHeading">
                  Role/project Title
                </th>
                <th
                  colSpan={2}
                  className="accordionHeading float-end pr-[15px] lg:pr-[25px]"
                >
                  Client
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black">
              <tr>
                <td
                  colSpan={2}
                  className="accordionDesc1 py-[13px] pl-[15px] lg:pl-[25px]"
                >
                  Completed
                </td>
                <td colSpan={2} className="accordionDesc1">
                  2011
                </td>
                <td colSpan={3} className="max-w-[272px] py-5 lg:py-[35px]">
                  <p className="accordionDesc2">
                    Undertook a UNICEF-funded evaluation that aimed at
                    documenting strengths, weaknesses, lessons learnt and
                    drawing recommendations for consideration in the expansion
                    of the project and future interventions, and to determine
                    whether expected results had been achieved
                  </p>
                </td>
                <td colSpan={2}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/4efb/0d5e/821ae2e74c06cd838a47af697b77972f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E7brTKF8DTYvgQ09PwLh2PnYUOhGz000R2M0XoEQFp9YgAlDf1OJ25rML9AKUoAQILXXXMS45jJFu0rNuWBpE4PqQi2VLIgtOUxWGjxeh0nf5hEGNmzDXIBbQt513l3vNitThM7fTQPvXadZSLPhJll5EtPr6Yt~2OazbRbnHl-MDSFssSu3XC49dPMt~ER7ki07I888-105LMVAJVGtbuAytLQreO5b0r4ecWAHZ0j35Gt-JdjnrO3-ymUulKc-Mw-KITI61DEQYggAVkzpzefVf9kUak79CvuBqL2KHLji2gEjj-QYrbTQequRkmkzY7E4So9RlL17mOliClWhbA__"
                    alt="client_logo"
                    className="w-[120px] object-cover float-end"
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className="accordionDesc1 py-[13px] pl-[15px] lg:pl-[25px]"
                >
                  Completed
                </td>
                <td colSpan={2} className="accordionDesc1">
                  2011
                </td>
                <td colSpan={3} className="max-w-[272px] py-5 lg:py-[35px]">
                  <p className="accordionDesc2">
                    Strengthening Somali Civil Society Organizations to Promote
                    a Holistic Approach to Democracy and Human Rights that are
                    Keys to Peace and Development. The aim of the assignment was
                    to identify capacity gaps and provide training to build
                    strengths of the organizations.
                  </p>
                </td>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

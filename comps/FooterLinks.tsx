import { useState } from "react";

const footerLinks = [
  {
    id: "1",
    title: "Real Estate Markets",
    arr: [
      "Alaska Real Estate",
      "Alabama Real Estate",
      "Arkansas Real Estate",
      "Arizona Real Estate",
      "California Real Estate",
      "Colorado Real Estate",
      "Connecticut Real Estate",
      "District Of Columbia Real Estate",
      "Delaware Real Estate",
      "Florida Real Estate",
      "Georgia Real Estate",
      "Hawaii Real Estate",
      "Iowa Real Estate",
      "Idaho Real Estate",
      "Illinois Real Estate",
      "Indiana Real Estate",
      "Kansas Real Estate",
      "Kentucky Real Estate",
      "Louisiana Real Estate",
      "Massachusetts Real Estate",
      "Maryland Real Estate",
      "Maine Real Estate",
      "Michigan Real Estate",
      "Minnesota Real Estate",
      "Missouri Real Estate",
      "Mississippi Real Estate",
      "Montana Real Estate",
      "North Carolina Real Estate",
    ],
  },
  {
    id: "2",
    title: "Popular Searches",
    arr: [
      "Houses for Sale Near Me by Owner",
      "Cheap Apartments for Rent Near Me",
      "Townhomes for Rent Near Me",
      "Condos for Sale Near Me",
      "Apartments for Rent Near Me",
      "Houses for Rent Near Me",
      "Houses for Sale Near Me",
      "Pet Friendly Apartments Near Me",
      "Land for Sale Near Me",
      "Open Houses Near Me",
      "Townhomes for Sale Near Me",
      "San Antonio Homes For Sale",
      "Chicago Homes For Sale",
      "Philadelphia Homes For Sale",
      "Sacramento Homes For Sale",
      "Bakersfield Homes For Sale",
      "New York Homes For Sale",
      "San Francisco Homes For Sale",
    ],
  },
  {
    id: "3",
    title: "For Professionals",
    arr: ["Popular Counties", "Rental Communities", "Real Estate Leads"],
  },
];
const FooterLinks = () => {
  const [limit, setLimit] = useState<number>(5);

  return (
    <div
      className=" border-t-2 gap-y-5 border-gray-100 pt-5 mt-10 w-full
     flex flex-col md:flex-row justify-evenly"
    >
      {footerLinks.map((e) => {
        return (
          <div key={e.id} className="">
            <h2 className=" md:text-left text-center text-gray-800 text-sm font-bold">
              {" "}
              {e.title}{" "}
            </h2>
            {e.arr.slice(0, limit).map((e, i) => {
              return (
                <div
                  className=" hover:text-cyan-600 flex flex-col items-center
                   md:block  cursor-pointer hover:underline
                   text-[0.7rem] text-gray-600"
                  key={i}
                >
                  <p> {e}</p>
                </div>
              );
            })}
            {/* {limit < 5 ? (
              <button onClick={() => setLimit(10)}>More</button>
            ) : (
              <button onClick={() => setLimit(5)}>Less</button>
            )} */}
          </div>
        );
      })}
    </div>
  );
};
export default FooterLinks;

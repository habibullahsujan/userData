
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { saveData } from "./apis/crudOperation";
import "./App.css";
import UserData from "./Components/UserData";


function App() {
  const [agree, setAgree] = useState(false);
  const [sectors, setSectors] = useState("");

  const loggedUserName = localStorage.getItem("name");

  const {
    isLoading,
    error,
    data: userData,
    refetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      fetch(` https://user-data-server.vercel.app/userData?${loggedUserName}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const agreed = agree;
    const userInfo = {
      name,
      sectors,
      agreed,
      createdTime: new Date(),
    };
    saveData(userInfo)
      .then((data) => {
        localStorage.setItem("name", name);

        toast.success("your information stored.");

        e.target.reset();
        refetch()
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <div className="my-10">
        <h3 className="text-center">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h3>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <div className="my-5 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-[90%] mx-auto">
            <label
              htmlFor="username"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500"
              placeholder="Write your name:"
            />
          </div>
          <div className=" my-5 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-[90%] mx-auto">
            <label
              htmlFor="sectors"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Sectors
            </label>
            <select
              onChange={(e) => setSectors(e.target.value)}
              required
              name=""
              id=""
              multiple
              size="5"
              className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500"
            >
              <option value="manufacture">Manufacturing</option>
              <option value="construction materials">
                &nbsp;&nbsp;&nbsp;&nbsp;Construction Materials
              </option>
              <option value="electronics and optics">
                &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
              </option>
              <option value="food and beverage">Food and Beverage</option>
              <option value="bakery confectionery product">
                &nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; Confectionery Products
              </option>
              <option value="beverages">
                &nbsp;&nbsp;&nbsp;&nbsp;Beverages
              </option>
              <option value="fish fish-product">
                &nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; Fish Products{" "}
              </option>
              <option value="meat meat-product">
                &nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; Meat Products
              </option>
              <option value="milk dairy-product">
                &nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; Dairy Products{" "}
              </option>
              <option value="others">&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
              <option value="sweets snack-food">
                &nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; Snack Food
              </option>
              <option value="furniture">Furniture</option>
              <option value="bathroom/sauna">
                &nbsp;&nbsp;&nbsp;&nbsp;Bathroom/Sauna{" "}
              </option>
              <option value="bedroom">&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
              <option value="children's room">
                &nbsp;&nbsp;&nbsp;&nbsp;Children's Room{" "}
              </option>
              <option value="kitchen">&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
              <option value="living-room">
                &nbsp;&nbsp;&nbsp;&nbsp;Living Room{" "}
              </option>
              <option value="office">&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
              <option value="other(furniture)">
                &nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)
              </option>
              <option value="outdoor">&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
              <option value="project furniture">
                &nbsp;&nbsp;&nbsp;&nbsp;Project Furniture
              </option>
              <option value="machinery">Machinery</option>
              <option value="machinery-components">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
                Components
              </option>
              <option value="machinery-equipment/tools">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
                Equipment/Tools
              </option>
              <option value="manufacture of machinery">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of
                Machinery{" "}
              </option>
              <option value="maritime">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime
              </option>
              <option value="aluminum and steel work-boat">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminum
                and Steel Work-Boats{" "}
              </option>
              <option value="boat/yacht">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht
                Building
              </option>
              <option value="ship repair and conversion">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship
                Repair and Conversion
              </option>
              <option value="metal structures">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal Structures
              </option>
              <option value="other">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
              </option>
              <option value="repair and maintenance service">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and
                Maintenance Service
              </option>
              <option value="metalworking">
                &nbsp;&nbsp;&nbsp;&nbsp;Metalworking
              </option>
              <option value="construction of metal structures">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of
                Metal Structures
              </option>
              <option value="houses and buildings">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and
                Buildings
              </option>
              <option value="metal products">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal Products
              </option>
              <option value="metal works">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal Works
              </option>
              <option value="cnc-machining">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-Machining
              </option>
              <option value="forgings, fasteners">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings,
                Fasteners{" "}
              </option>
              <option value="gas, plasma, laser-cutting">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas,
                Plasma, Laser cutting
              </option>
              <option value="mig, tig, aluminum-welding">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG,
                TIG, Aluminum welding
              </option>
              <option value="plastic and rubber">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber
              </option>
              <option value="packaging">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging
              </option>
              <option value="plastic goods">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods
              </option>
              <option value="plastic processing technology">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic
                processing technology
              </option>
              <option value="blowing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing
              </option>
              <option value="moulding">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding
              </option>
              <option value="plastics welding and processing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics
                welding and processing
              </option>
              <option value="plastic profiles">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles
              </option>
              <option value="printing">
                &nbsp;&nbsp;&nbsp;&nbsp;Printing{" "}
              </option>
              <option value="advertising">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising
              </option>
              <option
                value="book/periodicals
                printing"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals
                printing
              </option>
              <option
                value="labelling and
                packaging printing"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and
                packaging printing
              </option>
              <option value="textile and clothing">
                &nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing
              </option>
              <option value="clothing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing
              </option>
              <option value="textile">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile
              </option>
              <option value="wood">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
              <option value="other (wood)">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)
              </option>
              <option
                value="wooden building
                materials"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building
                materials
              </option>
              <option value="wooden houses">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses
              </option>
              <option value="Other">Other</option>
              <option value="creative industries">
                &nbsp;&nbsp;&nbsp;&nbsp;Creative industries
              </option>
              <option value="energy technology">
                &nbsp;&nbsp;&nbsp;&nbsp;Energy technology
              </option>
              <option value="environment">
                &nbsp;&nbsp;&nbsp;&nbsp;Environment
              </option>
              <option value="service">Service</option>
              <option value="business services">
                &nbsp;&nbsp;&nbsp;&nbsp;Business services
              </option>
              <option value="engineering">
                &nbsp;&nbsp;&nbsp;&nbsp;Engineering
              </option>
              <option
                value="information technology and
                telecommunications"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;Information Technology and
                Telecommunications
              </option>
              <option
                value="data processing,
                web portals, e-marketing"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing,
                Web portals, E-marketing
              </option>
              <option
                value="programming,
                consultancy"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming,
                Consultancy
              </option>
              <option
                value="software,
                hardware"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software,
                Hardware
              </option>
              <option value="telecommunications">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
              </option>
              <option value="tourism">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
              <option value="translation services">
                &nbsp;&nbsp;&nbsp;&nbsp;Translation services
              </option>
              <option value="transport and logistics">
                &nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics
              </option>
              <option value="air">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air
              </option>
              <option value="rail">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail
              </option>
              <option value="road">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road
              </option>
              <option value="water">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water
              </option>
            </select>
          </div>
          <div className=" flex mx-auto my-5 xl:w-3/5 lg:w-1/2 md:w-1/2 w-[90%] items-center">
            <input
              id="termsConditions"
              type="checkbox"
              onClick={() => setAgree(!agree)}
            />
            <label
              className="text-xs text-gray-500 ml-2"
              htmlFor="termsConditions"
            >
              Agree to terms.
            </label>
          </div>
          <button
            type="submit"
            disabled={!agree}
            className=" lg:w-1/2 mx-auto flex items-center justify-center bg-blue-600 text-sm font-medium w-[90%] h-10 rounded text-blue-50 hover:bg-blue-700"
          >
            Save
          </button>
        </form>
      </div>
      <UserData userData={userData} refetch={refetch}/>
      <Toaster />
    </div>
  );
}

export default App;


import { Link } from "react-router-dom";
import Herobg from "../assets/Mask Group.png"

const Herosection = () => {
  return (
    <section>
      <img className="h-[90vh] w-[100%]" src={Herobg} alt='Hero'/>
      <div className=" absolute w-[35%] h-[50%] right-12 bottom-20 bg-[#DFE9F4] px-5 py-3 items-center space-y-4">
        <span >New Arrival</span>
        <h1 className="font-semibold text-6xl text-[#054C73]">Discover Our New Collection</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt adipisci maxime vero earum, ullam quam!</p>
        <Link to="/gallery">
        <button className="text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</button>
        </Link>
        
        
      </div>
      
    </section>
  );
}

export default Herosection;
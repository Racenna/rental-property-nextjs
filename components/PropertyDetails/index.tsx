import { IProperty } from "@/lib/models/Property";
import { FaBath, FaBed, FaCheck, FaRulerCombined } from "react-icons/fa";
import { FaLocationDot, FaXmark } from "react-icons/fa6";

type Props = {
  property: IProperty;
};

const PropertyDetails = ({ property }: Props) => {
  const { street, city, state, zipcode } = property.location;
  const rates = property.rates;
  const address = `${street} ${city}, ${state} ${zipcode}`;

  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
          <FaLocationDot className="text-lg text-orange-700 mr-2" />
          <p className="text-orange-700">{address}</p>
        </div>
        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0 border-b border-gray-200 md:border-b-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold">
              {rates.nightly !== undefined ? (
                <span className="text-blue-500">${rates.nightly}</span>
              ) : (
                <FaXmark className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0 border-b border-gray-200 md:border-b-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold">
              {rates.weekly !== undefined ? (
                <span className="text-blue-500">${rates.weekly}</span>
              ) : (
                <FaXmark className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold">
              {rates.monthly !== undefined ? (
                <span className="text-blue-500">${rates.monthly}</span>
              ) : (
                <FaXmark className="text-red-700" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <p className="flex items-center">
            <FaBed />
            &nbsp;{property.beds}&nbsp;
            <span className="hidden sm:inline">Beds</span>
          </p>
          <p className="flex items-center">
            <FaBath />
            &nbsp;{property.baths}&nbsp;
            <span className="hidden sm:inline">Baths</span>
          </p>
          <p className="flex items-center">
            <FaRulerCombined />
            &nbsp;{property.square_feet}&nbsp;
            <span className="hidden sm:inline">sqft</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">{property.description}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow md:mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property.amenities.map((amenity) => (
            <li className="flex items-center" key={amenity}>
              <FaCheck className=" text-green-500 mr-3" />
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 md:mb-6">
        <div id="map"></div>
      </div>
    </main>
  );
};

export default PropertyDetails;

"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/lib/utils/requests";
import { IProperty } from "@/lib/models/Property";
import { FaBookmark, FaPaperPlane, FaShare } from "react-icons/fa";
// components
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyBackButton from "@/components/PropertyBackButton";
import PropertyDetails from "@/components/PropertyDetails";
import Spinner from "@/components/Spinner";

type PropertyParams = {
  id: string;
};

const PropertyPage = () => {
  const { id } = useParams<PropertyParams>();
  const [property, setProperty] = useState<IProperty | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && !property && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <PropertyBackButton />
          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails property={property} />
                <aside className="space-y-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                    <FaBookmark className="mr-2" /> Bookmark Property
                  </button>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                    <FaShare className="mr-2" /> Share Property
                  </button>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">
                      Contact Property Manager
                    </h3>
                    <form>
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          required
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Name:
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          required
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Phone:
                        </label>
                        <input
                          type="text"
                          id="phone"
                          placeholder="Enter your phone number"
                          required
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Message:
                        </label>
                        <textarea
                          id="message"
                          placeholder="Enter your message"
                          required
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                          type="submit"
                        >
                          <FaPaperPlane className="mr-2" /> Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PropertyPage;

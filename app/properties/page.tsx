// components
import PropertyCard from "@/components/PropertyCard";
// model
import { sortPropertiesByDate } from "@/lib/utils/functions";
import { fetchProperties } from "@/lib/utils/requests";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.sort(sortPropertiesByDate).map((property) => (
              <PropertyCard key={property._id.toString()} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;

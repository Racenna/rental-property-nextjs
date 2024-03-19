// components
import PropertyCard from "@/components/PropertyCard";
// model
import { IProperty } from "@/lib/models/Property";

const fetchProperties = async (): Promise<IProperty[] | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const sortByDate = (a: IProperty, b: IProperty) =>
  Number(new Date(b.createdAt)) - Number(new Date(a.createdAt));

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {!properties || properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.sort(sortByDate).map((property) => (
              <PropertyCard key={property._id.toString()} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;

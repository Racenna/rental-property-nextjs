import Image from "next/image";

type Props = {
  image?: string;
};

const PropertyHeaderImage = ({ image }: Props) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            alt="Header Image"
            className="object-cover h-[400px] w-screen"
            height={0}
            width={0}
            sizes="100vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;

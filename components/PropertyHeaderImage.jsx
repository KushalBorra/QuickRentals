import Image from "next/image";

const PropertyHeaderImage = (props) => {
  const { image } = props;
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/properties/${image}`}
            height="0"
            alt=""
            className="object-cover h-[400px] w-full"
            width="0"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;

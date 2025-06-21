const PropertyById = async ({ params }) => {
  const { id } = await params;
  return <div>Property by id: {id}</div>;
};

export default PropertyById;

const Unauthorized = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-16 flex items-center justify-center backdrop-filter backdrop-blur-lg">
      <div className="rounded-full bg-green-600 shadow">
        <h3 className="m-2 md:m-5 text-center">
          You must be logged in to view this page.
        </h3>
      </div>
    </div>
  )
};

export default Unauthorized;
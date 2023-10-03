const Home = (props) => {
  const dynamicHeight = `calc(100vh - ${props.headerHeight}px)`;

  return (
    <section
      className="w-full bg-dark-custom flex flex-col justify-center items-center"
      style={{ minHeight: dynamicHeight }}
    >
      <div>
        <h1 className="text-7xl">MUGENCODE ™</h1>
        <div className="flex flex-col items-start">
          <div className="w-20 ml-6 h-1 mt-2 rounded bg-red-custom my-2"></div>
          <div className="w-20 ml-16 h-1 mt-1 rounded bg-red-custom"></div>
        </div>
        <p className="ml-6 mt-2 text-xl font-semibold">Web Developers</p>
      </div>
    </section>
  );
};

export default Home;

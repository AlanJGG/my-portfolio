export const Home = () => {
  return (
    <div id="home" className="p-28 2xl:pb-48 md:flex justify-center 2xl:mt-28">
      <div className="my-10 md:my-28  ml-5">
        <h2 className="pl-6 text-xl md:text-2xl lg:text-2xl xl:text-3xl antialiased">
          Hi, I'm Alan.
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold antialiased">
          I give fast and innovative solutions.
        </h1>
      </div>
      <div className="md:pl-40 md:pt-2">
        <img
          className="brightness-75 grayscale-0 lg:size-96 xl:size-auto rounded-xl md:max-w-[400px] sm:size-auto"
          src={`${import.meta.env.BASE_URL}assets/draft-face.png`}
        />
      </div>
    </div>
  );
};

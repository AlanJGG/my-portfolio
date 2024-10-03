export const Home = () => {
  return (
    <div id="home" className="p-28 md:flex">
      <div className="my-10 md:my-28 ml-5">
        <h2 className="pl-6 text-2xl antialiased">Hi, I'm Alan.</h2>
        <h1 className="text-4xl font-semibold antialiased">I give fast and innovative solutions.</h1>
      </div>
      <div className="md:pl-40 md:pt-2">
        <img className="brightness-75 grayscale-0 md:size-96 sd:size-auto rounded-xl" src="/assets/draft-face.png"/>
      </div>
    </div>
  );
};

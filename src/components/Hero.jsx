function Hero() {
  return (
    <div className="relative  bg-hero-image mt-2 w-full ">
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded gap-16 ">
        <h1 className="text-white text-8xl font-extrabold shadowtext uppercase text-center">
          Bienvenido a Bolirana Talento Tech,
        </h1>
        <h3 className="text-white text-5xl font-normal shadowtext uppercase text-center">
          !El mejor lugar para jugar bolirana en la ciudad!
        </h3>
      </div>
    </div>
  );
}

export default Hero;

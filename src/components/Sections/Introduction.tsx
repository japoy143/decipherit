function Introduction() {
  return (
    <section className=" h-screen grid grid-cols-2 items-center text-3xl font-medium text-white px-10 gap-10 ">
      <article className=" flex flex-col justify-center  space-y-4  text-justify">
        <h1>Cryptography</h1>
        <p className=" ">
          is the practice of developing and using coded algorithms to protect
          and obscure transmitted information so that it may only be read by
          those with the permission and ability to decrypt it. Put differently,
          cryptography obscures communications so that unauthorized parties are
          unable to access them.
        </p>
      </article>
      <div className="  flex flex-col  items-center text-center  justify-center space-y-4">
        <img
          src="/images/turing.jpg"
          className=" h-[400px] w-[400px] object-contain"
        />
        <h1>Alan Mathison Turing</h1>
      </div>
    </section>
  );
}

export default Introduction;

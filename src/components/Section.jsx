function Section({ children }) {
  return (
    <section className="bg-slate-500 flex-row flex gap-3 justify-around items-center rounded mt-2 shadow-[10px_5px_15px_black_inset] min-w-10 min-h-10 h-96 p-8">
      {children}
    </section>
  );
}

export default Section;

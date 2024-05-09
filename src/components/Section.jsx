function Section({ children }) {
  return (
    <section className="bg-slate-500 rounded mt-2 h-9 w-full shadow-[10px_5px_15px_black_inset]">
      {children}
    </section>
  );
}

export default Section;

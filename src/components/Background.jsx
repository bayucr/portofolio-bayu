export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] overflow-hidden [mask-image:linear-gradient(to_bottom,black_50%,transparent)]"
    >
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-pink-500/15 blur-3xl" />
      <div className="absolute bottom-16 left-1/3 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
    </div>
  );
}

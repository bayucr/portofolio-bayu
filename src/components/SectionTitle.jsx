export default function SectionTitle({ children }) {
  return (
    <div className="text-center">
      <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
        {children}
      </h2>
      <div className="gradient-bg mx-auto mt-3 h-1 w-16 rounded-full" />
    </div>
  );
}

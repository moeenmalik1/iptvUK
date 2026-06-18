export default function SectionHeading({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <h2 className={`text-2xl font-extrabold sm:text-3xl ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-3 text-sm sm:text-base ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

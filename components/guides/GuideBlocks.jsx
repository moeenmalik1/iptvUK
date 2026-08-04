import Link from 'next/link';

function Heading({ block }) {
  if (block.type === 'h2') {
    return (
      <h2 id={block.id} className="mt-12 scroll-mt-24 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        {block.text}
      </h2>
    );
  }

  return (
    <h3 id={block.id} className="mt-8 scroll-mt-24 text-xl font-extrabold text-slate-900 sm:text-2xl">
      {block.text}
    </h3>
  );
}

const inlineLinkClasses =
  'font-semibold text-orange-600 underline decoration-orange-300 underline-offset-2 transition hover:text-orange-700';

// Paragraph text may be a plain string or an array of segments, where a segment is
// either a string or { text, href } for an inline link.
export function RichText({ value }) {
  if (typeof value === 'string') {
    return value;
  }

  return (
    <>
      {value.map((segment, index) => {
        if (typeof segment === 'string') {
          return segment;
        }

        if (segment.href.startsWith('http') || segment.href.startsWith('mailto')) {
          return (
            <a
              key={index}
              href={segment.href}
              target="_blank"
              rel="noreferrer"
              className={inlineLinkClasses}
            >
              {segment.text}
            </a>
          );
        }

        return (
          <Link key={index} href={segment.href} className={inlineLinkClasses}>
            {segment.text}
          </Link>
        );
      })}
    </>
  );
}

function Paragraph({ block }) {
  return (
    <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[17px] sm:leading-8">
      <RichText value={block.text} />
    </p>
  );
}

function ProsCons({ block }) {
  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Pros</p>
        <ul className="mt-4 space-y-2">
          {block.pros.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
              <span className="mt-0.5 font-bold text-emerald-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-700">Cons</p>
        <ul className="mt-4 space-y-2">
          {block.cons.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
              <span className="mt-0.5 font-bold text-rose-500">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BulletList({ block }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {block.items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
        >
          <span className="mt-0.5 text-orange-500">•</span>
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckList({ block }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {block.items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm font-medium text-slate-700"
        >
          <span className="mt-0.5 font-bold text-emerald-600">✓</span>
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Steps({ block }) {
  return (
    <ol className="mt-6 space-y-4">
      {block.items.map((step, index) => (
        <li
          key={step.title ?? index}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            {index + 1}
          </span>
          <div>
            {step.title ? <p className="text-sm font-bold text-slate-900 sm:text-base">{step.title}</p> : null}
            <p className={`text-sm leading-6 text-slate-600 ${step.title ? 'mt-1' : ''}`}>
              <RichText value={step.body} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Cards({ block }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {block.items.map((card) => (
        <article
          key={card.title}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)]"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
            {card.tag ? (
              <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-600">
                {card.tag}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            <RichText value={card.body} />
          </p>
        </article>
      ))}
    </div>
  );
}

function Callout({ block }) {
  const tones = {
    note: 'border-sky-200 bg-sky-50 text-sky-950',
    warning: 'border-amber-200 bg-amber-50 text-amber-950',
    tip: 'border-emerald-200 bg-emerald-50 text-emerald-950'
  };

  return (
    <div className={`mt-6 rounded-2xl border px-5 py-4 ${tones[block.tone] ?? tones.note}`}>
      {block.title ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">{block.title}</p>
      ) : null}
      <p className={`text-sm leading-6 ${block.title ? 'mt-2' : ''}`}>
        <RichText value={block.text} />
      </p>
    </div>
  );
}

function Figure({ block }) {
  return (
    <figure className="mt-8">
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.6)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={block.src} alt={block.alt} width={1200} height={630} className="h-auto w-full" loading="lazy" />
      </div>
      {block.caption ? (
        <figcaption className="mt-3 text-center text-sm text-slate-500">{block.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function Table({ block }) {
  return (
    <div className="mt-6">
      {block.caption ? <p className="mb-3 text-sm text-slate-500">{block.caption}</p> : null}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.6)]">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              {block.headers.map((header) => (
                <th key={header} className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={row[0]} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${row[0]}-${cellIndex}`}
                    className={`border-t border-slate-200 px-4 py-3 align-top leading-6 ${
                      cellIndex === 0 ? 'font-semibold text-slate-900' : 'text-slate-600'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Verdict({ block }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {block.items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 p-5 text-white shadow-[0_25px_70px_-45px_rgba(15,23,42,0.9)]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">{item.label}</p>
          <h3 className="mt-2 text-lg font-black">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            <RichText value={item.body} />
          </p>
        </article>
      ))}
    </div>
  );
}

function ButtonRow({ block }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {block.items.map((item) =>
        item.href.startsWith('http') ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}

const renderers = {
  h2: Heading,
  h3: Heading,
  p: Paragraph,
  ul: BulletList,
  checklist: CheckList,
  steps: Steps,
  cards: Cards,
  callout: Callout,
  table: Table,
  verdict: Verdict,
  buttons: ButtonRow,
  proscons: ProsCons,
  image: Figure
};

export default function GuideBlocks({ blocks }) {
  return (
    <>
      {blocks.map((block, index) => {
        const Renderer = renderers[block.type];

        if (!Renderer) {
          return null;
        }

        return <Renderer key={`${block.type}-${index}`} block={block} />;
      })}
    </>
  );
}

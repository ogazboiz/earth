import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "List",
    copy: "A farm, a mine, a mill or a cooperative lists what it has. If you own a gold mine, you can bring it here.",
  },
  {
    title: "Verify",
    copy: "Quality, quantity and documentation are checked at origin and confirmed before cargo moves.",
  },
  {
    title: "Trade",
    copy: "Buyers and sellers agree terms on the exchange. Contracts and logistics are handled end to end, across borders.",
  },
  {
    title: "Anywhere",
    copy: "Someone in the United States uses Earth exactly as someone in Nigeria does. One exchange, open to the world.",
  },
];

export function WhyEarth() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="label text-ink/45">Why Earth</p>
        <h2 className="display mt-6 max-w-[20ch] text-[clamp(2.2rem,5vw,4.2rem)]">
          One exchange for what grows from the earth, what is locked beneath it, and what feeds from
          it.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <div className="rule pt-5">
              <h3 className="display text-3xl">{p.title}</h3>
              <p className="text-ink/60 mt-3 text-sm leading-relaxed">{p.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

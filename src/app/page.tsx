export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-12">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-warm-text">
          Welcome to MyApp
        </h1>
        <p className="max-w-xl text-lg text-warm-muted leading-relaxed">
          A warm-themed Next.js starter with full dark mode support. Toggle
          between light and dark using the switch in the header.
        </p>
        <div className="flex gap-3 pt-2">
          <button className="rounded-lg bg-warm-accent px-5 py-2.5 text-sm font-semibold text-warm-bg hover:bg-warm-accent-hover transition-colors">
            Get started
          </button>
          <button className="rounded-lg border border-warm-border px-5 py-2.5 text-sm font-semibold text-warm-text hover:bg-warm-surface transition-colors">
            Learn more
          </button>
        </div>
      </section>

      <hr className="border-warm-border" />

      {/* Feature cards */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-warm-text">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-warm-border bg-warm-surface p-5 space-y-2 transition-colors"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="font-semibold text-warm-text">{f.title}</h3>
              <p className="text-sm text-warm-muted leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-warm-border" />

      {/* Color palette swatch */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-warm-text">
          Theme palette
        </h2>
        <div className="flex flex-wrap gap-3">
          {SWATCHES.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5">
              <div
                className="h-12 w-12 rounded-lg border border-warm-border shadow-sm"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-xs text-warm-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const FEATURES = [
  {
    icon: "🎨",
    title: "Warm color system",
    description:
      "A cohesive cream-and-brown palette that feels cozy in both light and dark modes.",
  },
  {
    icon: "🌙",
    title: "Dark mode",
    description:
      "Class-based dark mode with a candlelight-warm dark palette, persisted across reloads.",
  },
  {
    icon: "♿",
    title: "Accessible contrast",
    description:
      "All color pairings meet WCAG AA (4.5:1) — the dark text on cream achieves 15:1.",
  },
  {
    icon: "⚡",
    title: "Tailwind v4",
    description:
      "CSS-native theme tokens via @theme and @variant — no JS config file needed.",
  },
  {
    icon: "💾",
    title: "Preference persistence",
    description:
      "Chosen theme is saved to localStorage and restored on next visit.",
  },
  {
    icon: "🖥️",
    title: "System aware",
    description:
      "Falls back to prefers-color-scheme when no preference has been saved yet.",
  },
];

const SWATCHES = [
  { label: "bg", color: "var(--warm-bg)" },
  { label: "surface", color: "var(--warm-surface)" },
  { label: "border", color: "var(--warm-border)" },
  { label: "muted", color: "var(--warm-muted)" },
  { label: "accent", color: "var(--warm-accent)" },
  { label: "text", color: "var(--warm-text)" },
];

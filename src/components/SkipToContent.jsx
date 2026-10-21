export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only z-[100] rounded bg-[#0F2D57] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to content
    </a>
  );
}
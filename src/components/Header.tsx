"use client";

import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-warm-border bg-warm-surface px-6 py-4 transition-colors duration-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-warm-text">
          MyApp
        </span>

        <div className="flex items-center gap-2.5">
          {/* Sun icon */}
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-warm-muted"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.166 17.834a.75.75 0 0 0-1.06 1.06l1.59 1.591a.75.75 0 1 0 1.061-1.06l-1.591-1.591ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.166 6.166a.75.75 0 0 0 1.06 1.06l1.591-1.59a.75.75 0 1 0-1.06-1.061L6.166 6.166Z" />
          </svg>

          {/* Toggle switch */}
          <button
            role="switch"
            aria-checked={isDark}
            aria-label="Toggle dark mode"
            onClick={toggle}
            className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full border border-warm-border bg-warm-bg transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-accent"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-warm-accent shadow transition-transform duration-200 ${
                isDark ? "translate-x-5.5" : "translate-x-1"
              }`}
            />
          </button>

          {/* Moon icon */}
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-warm-muted"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

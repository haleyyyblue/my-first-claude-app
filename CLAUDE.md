# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Key Stack Notes

**Tailwind CSS v4**: This project uses Tailwind v4's CSS-native configuration — there is no `tailwind.config.js`. All theme tokens (colors, spacing, etc.) are defined using `@theme` inside `src/app/globals.css`. Do not create a JS config file or use Tailwind v3 config syntax.

**ESLint**: Flat config format (`eslint.config.mjs`, ESLint v9+). There is no `.eslintrc` file.

**No test framework**: No test suite is configured; do not attempt to run tests.

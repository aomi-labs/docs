# Aomi Documentation

## About this project

- This is the Aomi documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Live at aomi.dev/docs

## Terminology

- Two-word system for the builder surface: a **plugin** is the thing a builder writes (the Rust cdylib the runtime loads dynamically — use for authoring, anatomy, SDK prose); an **App** is the thing they ship (the deployed, user-selectable unit — the word the CLI, `aomi.toml`, portal, and Developer Platform show). Define the bridge once per page at most; never rewrite commands, config keys, or UI labels to say "plugin"
- Use **App** (capitalized) not "app" when referring to the deployed unit; not "agent" or "bot"
- Use **non-custodial** not "trustless" or "decentralized"
- Use **widget** not "chat widget" on first reference, then "widget"
- Use **headless library** not "SDK" for `@aomi-labs/react`
- Use **simulate** not "preview" or "dry-run"

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Refer to the product as "Aomi" not "the Aomi platform" on subsequent mentions

## Content boundaries

- Do not document internal infrastructure or deployment details
- Do not document feature flags or experimental features
- Focus on what users and builders can do, not how the system works internally
- Reference pages are for complete API/CLI/SDK reference; guides are for tutorials and walkthroughs

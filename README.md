# Aomi Docs

Documentation for [Aomi](https://aomi.dev) — the blockchain harness for agentic AI.

## Architecture

```
                    ┌─────────────────────────────────┐
                    │          docs.aomi.dev            │
                    │         (Mintlify hosted)         │
                    └──────────────┬──────────────────┘
                                   │
                    ┌──────────────┴──────────────────┐
                    │         docs.json                │
                    │   (navigation + theme config)    │
                    └──────────────────────────────────┘
                                   │
                    ┌──────────────┼──────────────────┐
                    │              │                    │
          ┌─────────┴──────┐  ┌───┴────┐  ┌───────────┴───────┐
          │   User-facing  │  │Builder │  │     Reference      │
          │  Getting Started│  │ Guides │  │   (API, SDK, CLI)  │
          │  (web, tg, ds) │  │(widget,│  │   (runtime, sim,   │
          │               │  │headless│  │   sessions, auth)   │
          └────────────────┘  │tools,  │  └───────────────────┘
                              │evals)  │
                              └───┬────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │      Concepts              │
                    │  (architecture, apps,      │
                    │   non-custodial wallets)   │
                    └───────────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │      Examples              │
                    │  (Polymarket, DeFi, X,     │
                    │   MetaMask integrations)   │
                    └───────────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │      Resources             │
                    │   (changelog, FAQ)         │
                    └───────────────────────────┘
```

## Walkthrough

The docs are organized into six sections. Read them in order if you're new, or jump to what you need.

### 1. Getting Started

Quickstart for end users:

| Page | What it covers |
|------|---------------|
| `getting-started/quickstart.mdx` | Install AomiFrame in a Next.js app, set env vars, run |
| `getting-started/web-app.mdx` | Use Aomi at chat.aomi.dev — composer, control bar, threads |
| `getting-started/telegram.mdx` | @aomi_sendit_bot — slash commands, panels, wallet |
| `getting-started/discord.mdx` | Discord bot (coming soon) |
| `getting-started/ios.mdx` | iOS app (coming soon) |
| `getting-started/playground.mdx` | Live AomiFrame configurator |

### 2. Platform Guides

Integration walkthroughs for builders:

| Page | What it covers |
|------|---------------|
| `guides/integration.mdx` | Full-stack pipeline — APIs → tools → app → deploy |
| `guides/frontend-setup.mdx` | Widget vs headless decision guide |
| `guides/widget-installation.mdx` | shadcn registry install, compound components, control bar |
| `guides/widget/aomi-frame.mdx` | AomiFrame props, compound API, layout diagram |
| `guides/widget/components.mdx` | Catalog of all registry components |
| `guides/widget/configuration.mdx` | Env vars, props, control state, backend endpoints |
| `guides/widget/theming.mdx` | CSS variables, dark mode, customizations |
| `guides/headless-library.mdx` | @aomi-labs/react overview, provider hierarchy, hooks |
| `guides/headless/hooks.mdx` | Full API reference — useAomiRuntime, useUser, useControl, etc. |
| `guides/headless/build-custom-ui.mdx` | Tutorial: message list, input, thread switcher |
| `guides/cli-usage.mdx` | aomi chat, app, model, chain, session commands |
| `guides/custom-tools.mdx` | Rust SDK tool macro, registration, scheduler |
| `guides/evals-testing.mdx` | EvalCase, assertions, running tests in CI |
| `guides/troubleshooting.mdx` | Common CLI, execution, UI, and API issues |

### 3. Concepts

Architectural deep-dives:

| Page | What it covers |
|------|---------------|
| `concepts/what-is-aomi.mdx` | Agentic Applications, auth, safety defaults |
| `concepts/architecture.mdx` | Platform overview, transaction pipeline, integration paths |
| `concepts/non-custodial-wallets.mdx` | Simulation-first flow, Para/wagmi, account abstraction |
| `concepts/key-concepts.mdx` | Core concepts explained concisely |

### 4. Examples

Real-world integrations:

| Page | What it covers |
|------|---------------|
| `examples/polymarket.mdx` | Prediction market tools (Gamma, Data API, CLOB) |
| `examples/defi-aggregators.mdx` | DeFi tools (DefiLlama, 0x, LI.FI, CoW) |
| `examples/x-apis.mdx` | X API v2 tools (search, timeline, trends) |
| `examples/metamask.mdx` | Embedding Aomi in wallet UIs (coming soon) |

### 5. Reference

Full API, CLI, SDK, and protocol reference:

| Page | What it covers |
|------|---------------|
| `reference/api-reference.mdx` | HTTP endpoints, headers, SSE stream format |
| `reference/sessions.mdx` | Session lifecycle, thread management, wallet binding |
| `reference/building-apps.mdx` | CoreAppBuilder, tool definitions, deployment |
| `reference/apps-auth.mdx` | API keys, scoping, authentication flow, default app |
| `reference/sdk-api.mdx` | Rust ChatAppBuilder, streaming, ChatCommand variants |
| `reference/cli.mdx` | Full CLI command reference + flags |
| `reference/simulation.mdx` | Anvil forks, ForkProvider, batch simulation |
| `reference/account-abstraction.mdx` | Session keys, gas sponsorship, ERC-4337 |
| `reference/runtime.mdx` | Session manager, reconstructor, SSE streaming |

### 6. Resources

| Page | What it covers |
|------|---------------|
| `resources/changelog.mdx` | Platform changelog |
| `resources/faq.mdx` | Frequently asked questions |

## File Map

```
docs.aomi.dev/
├── docs.json                     # Navigation + theme config
├── index.mdx                     # Landing page
├── getting-started/
│   ├── quickstart.mdx
│   ├── playground.mdx
│   ├── web-app.mdx
│   ├── telegram.mdx
│   ├── discord.mdx
│   └── ios.mdx
├── guides/
│   ├── integration.mdx
│   ├── frontend-setup.mdx
│   ├── widget-installation.mdx
│   ├── widget/
│   │   ├── aomi-frame.mdx
│   │   ├── components.mdx
│   │   ├── configuration.mdx
│   │   └── theming.mdx
│   ├── headless-library.mdx
│   ├── headless/
│   │   ├── hooks.mdx
│   │   └── build-custom-ui.mdx
│   ├── cli-usage.mdx
│   ├── custom-tools.mdx
│   ├── evals-testing.mdx
│   └── troubleshooting.mdx
├── concepts/
│   ├── what-is-aomi.mdx
│   ├── architecture.mdx
│   ├── non-custodial-wallets.mdx
│   └── key-concepts.mdx
├── examples/
│   ├── index.mdx
│   ├── polymarket.mdx
│   ├── defi-aggregators.mdx
│   ├── x-apis.mdx
│   └── metamask.mdx
├── reference/
│   ├── api-reference.mdx
│   ├── sessions.mdx
│   ├── building-apps.mdx
│   ├── apps-auth.mdx
│   ├── sdk-api.mdx
│   ├── cli.mdx
│   ├── simulation.mdx
│   ├── account-abstraction.mdx
│   └── runtime.mdx
├── resources/
│   ├── changelog.mdx
│   └── faq.mdx
├── images/
│   ├── architecture-overview.png
│   └── runtime-architecture.png
└── logo/
    ├── light.svg
    └── dark.svg
```

## Development

```bash
npm i -g mint
mint dev
```

Preview at `http://localhost:3000`.

All content is in `.mdx` files with YAML frontmatter. Navigation is driven by `docs.json`.

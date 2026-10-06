# Aomi Officical Documentation

Documentation for [Aomi](https://aomi.dev) — the blockchain harness for agentic AI.

## Walkthrough

The docs are organized into six sections. Read them in order if you're new, or jump to what you need.

### 1. Getting Started

Quickstart for end users:

| Page | What it covers |
|------|---------------|
| `guides/widget/quickstart.mdx` | Install the compiled widget and render it with an Application ID |
| `getting-started/web-app.mdx` | Use Aomi at chat.aomi.dev — composer, control bar, threads |
| `getting-started/telegram.mdx` | @aomi_sendit_bot — slash commands, panels, wallet |
| `getting-started/discord.mdx` | Discord bot (coming soon) |
| `getting-started/ios.mdx` | iOS app (coming soon) |
| `getting-started/playground.mdx` | Widget layout and scoped theme configurator |

### 2. Platform Guides

Integration walkthroughs for builders:

| Page | What it covers |
|------|---------------|
| `guides/widget/installation.mdx` | npm installation and optional Para or Privy wallets |
| `guides/widget/customization.mdx` | Layout, routing, threads and compiled frame composition |
| `guides/widget/deploy/ship-on-vercel.mdx` | Frontend deployment and registered origins |
| `guides/headless-library.mdx` | @aomi-labs/react full reference — providers, hooks, API client, BackendApi |
| `guides/headless/hooks.mdx` | Full API reference — useAomiRuntime, useUser, useControl, etc. |
| `guides/headless/build-custom-ui.mdx` | Tutorial: message list, input, thread switcher |
| `guides/cli-usage.mdx` | aomi chat, app, model, chain, session commands |
| `guides/custom-tools.mdx` | Rust SDK tool macro, registration, scheduler |
| `guides/evals-testing.mdx` | Testing layers — tool unit tests, test.json e2e journeys, smoke tests, AomiBench |
| `guides/execution.mdx` | Transaction lifecycle — Anvil forks, simulation, wallet integration |
| `guides/script-generation.mdx` | ForgeExecutor, ExecutionPlan, SourceFetcher, ScriptAssembler |
| `guides/troubleshooting.mdx` | Common CLI, execution, UI, and API issues |

### 3. Concepts

Architectural deep-dives:

| Page | What it covers |
|------|---------------|
| `concepts/what-is-aomi.mdx` | Agentic Applications, auth, safety defaults |
| `concepts/transaction-pipeline.mdx` | Full platform pipeline — APIs → tools → deploy → request flow |
| `concepts/architecture.mdx` | Platform overview, transaction pipeline, integration paths |
| `concepts/accounts-and-wallets.mdx` | Simulation-first flow, Para/wagmi setup, wallet integration code |
| `concepts/key-concepts.mdx` | Core concepts explained concisely |

### 4. Examples

Real-world integrations:

| Page | What it covers |
|------|---------------|
| `examples/polymarket.mdx` | Prediction market tools (Gamma, Data API, CLOB) |
| `examples/defi-aggregators.mdx` | DeFi tools (DefiLlama, 0x, LI.FI, CoW) |
| `examples/x-apis.mdx` | X API v2 tools (search, timeline, trends) |
| `examples/metamask-wallet-integration.mdx` | Embedding Aomi in wallet UIs (coming soon) |

### 5. Reference

Full API, CLI, SDK, and protocol reference:

| Page | What it covers |
|------|---------------|
| `reference/sdk-api.mdx` | ChatAppBuilder, streaming, ChatCommand variants, SystemEventQueue, custom tools, multi-step tools |
| `reference/client-cli.mdx` | Full CLI reference — commands, secrets, signing modes, session state, all flags |
| `reference/simulation-reference.mdx` | Anvil forks, ForkProvider, batch simulation |
| `reference/account-abstraction.mdx` | Session keys, gas sponsorship, ERC-4337 |
| `reference/runtime.mdx` | App turn lifecycle, model/tool loop, transaction harness, wallet callbacks, SSE streaming |

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
│   │   ├── quickstart.mdx
│   │   ├── installation.mdx
│   │   ├── customization.mdx
│   │   ├── troubleshooting.mdx
│   │   └── deploy/ship-on-vercel.mdx
│   ├── headless-library.mdx
│   ├── headless/
│   │   ├── hooks.mdx
│   │   └── build-custom-ui.mdx
│   ├── cli-usage.mdx
│   ├── custom-tools.mdx
│   ├── evals-testing.mdx
│   ├── execution.mdx
│   ├── script-generation.mdx
│   └── troubleshooting.mdx
├── concepts/
│   ├── what-is-aomi.mdx
│   ├── how-it-works.mdx
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

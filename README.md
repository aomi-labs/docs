# Aomi Docs

Documentation for [Aomi](https://aomi.dev) — the blockchain harness for agentic AI.

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
| `guides/frontend-setup.mdx` | Widget install walkthrough — shadcn, env vars, AomiFrame, layout |
| `guides/widget-installation.mdx` | shadcn registry install, compound components, control bar |
| `guides/widget/aomi-frame.mdx` | AomiFrame props, compound API, layout diagram |
| `guides/widget/components.mdx` | Catalog of all registry components |
| `guides/widget/configuration.mdx` | Env vars, props, control state, backend endpoints |
| `guides/widget/theming.mdx` | CSS variables, dark mode, customizations |
| `guides/headless-library.mdx` | @aomi-labs/react full reference — providers, hooks, API client, BackendApi |
| `guides/headless/hooks.mdx` | Full API reference — useAomiRuntime, useUser, useControl, etc. |
| `guides/headless/build-custom-ui.mdx` | Tutorial: message list, input, thread switcher |
| `guides/cli-usage.mdx` | aomi chat, app, model, chain, session commands |
| `guides/custom-tools.mdx` | Rust SDK tool macro, registration, scheduler |
| `guides/evals-testing.mdx` | EvalCase, assertions, running tests in CI |
| `guides/execution.mdx` | Transaction lifecycle — Anvil forks, simulation, wallet integration |
| `guides/script-generation.mdx` | ForgeExecutor, ExecutionPlan, SourceFetcher, ScriptAssembler |
| `guides/troubleshooting.mdx` | Common CLI, execution, UI, and API issues |

### 3. Concepts

Architectural deep-dives:

| Page | What it covers |
|------|---------------|
| `concepts/what-is-aomi.mdx` | Agentic Applications, auth, safety defaults |
| `concepts/how-it-works.mdx` | Full platform pipeline — APIs → tools → deploy → request flow |
| `concepts/architecture.mdx` | Platform overview, transaction pipeline, integration paths |
| `concepts/non-custodial-wallets.mdx` | Simulation-first flow, Para/wagmi setup, wallet integration code |
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
| `reference/sdk-api.mdx` | ChatAppBuilder, streaming, ChatCommand variants, SystemEventQueue, custom tools, multi-step tools |
| `reference/cli.mdx` | Full CLI reference — commands, secrets, signing modes, session state, all flags |
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

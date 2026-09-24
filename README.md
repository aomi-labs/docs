# Aomi documentation

This repository owns the canonical [Aomi documentation](https://aomi.dev/docs), built with Mintlify. Pages are MDX; `docs.json` defines navigation, redirects, and the interactive OpenAPI reference.

## Developer entry points

| Area | Start here |
| --- | --- |
| TypeScript client | [Client SDK](integrate/client-sdk.mdx) |
| Agent turns and events | [Agent](integrate/agent.mdx) |
| Portable transaction Builds | [Pipeline](integrate/pipeline.mdx) |
| Authentication and App credentials | [Authentication](integrate/authentication.mdx) |
| Wallet review and durable Commits | [Wallet and signing](integrate/actions-and-signing.mdx) |
| CLI | [CLI reference](reference/client-cli.mdx) |
| MCP | [MCP setup](guides/mcp.mdx) |
| Rust plugin authoring | [Rust SDK](build/plugins/rust-sdk.mdx) |
| HTTP resources | [API reference](api-reference/overview.mdx) |
| Packaged widget | [Widget installation](guides/widget/installation.mdx) |

## Source ownership

- [`aomi-labs/aomi`](https://github.com/aomi-labs/aomi): `packages/client` owns the TypeScript client and CLI; the React and widget packages own browser integration.
- [`aomi-labs/aomi-sdk`](https://github.com/aomi-labs/aomi-sdk): Rust plugin-authoring SDK, macros, test helpers, and example Apps.
- [`aomi-labs/product-mono`](https://github.com/aomi-labs/product-mono): backend routes and generated OpenAPI contracts.

Verify examples against the relevant source and installed package declarations. Merged source, published npm/crate versions, and hosted deployment availability are separate facts. Mark examples that require a newer release; do not document open PRs as available features.

## Local validation

Use the [Mintlify CLI](https://www.mintlify.com/docs/installation) to preview and validate the site. Check MDX compilation, internal links, and JSON examples. Type-check complete TypeScript examples against the installed client; document host-provided UI callbacks and wallet adapters in partial examples. Validate Rust examples against the pinned SDK version.

Keep old page paths as concise pointers when replacing retired API or SDK guidance. Read [AGENTS.md](AGENTS.md) for terminology and content boundaries.

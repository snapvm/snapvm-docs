# AGENTS.md

This repository contains the public user documentation for SnapVM, a SaaS
product for launching and operating MicroVM-backed development workspaces from a
browser. Treat all content in `src/content/docs/**` as end-user-facing product
documentation.

## Audience and Scope

- Write for customers and workspace users, not for SnapVM maintainers or
  infrastructure operators.
- Prefer task-oriented explanations: what the user can do in the console, what
  state they can expect, and how to recover or proceed.
- Keep implementation details out of user docs unless they directly affect a
  user's workflow, billing, security expectation, or troubleshooting step.
- Describe SnapVM as the product surface. Mention underlying providers or
  runtime names only when the user must select, configure, or understand that
  option in the UI.

## Public Content Boundaries

Avoid exposing internal architecture or operational details in public docs.
Remove or rewrite content that centers on:

- Control plane internals, database schemas, row-level security, queues, worker
  topology, gateway implementation, agent protocols, or provider orchestration.
- Internal service names, private domains, deployment topology, logging
  backends, observability pipelines, secrets handling internals, or incident
  procedures.
- Code paths, repository structure, environment variables, credentials, feature
  flags, or admin-only APIs that are not part of the public product contract.
- Low-level networking details such as WebSocket PTY routing, gateway-to-agent
  hops, or port proxy mechanics unless needed for a user-facing troubleshooting
  instruction.

Use product-level language instead:

- "Open a terminal from the machine page" instead of describing the terminal
  gateway, WebSocket, or agent protocol.
- "SnapVM keeps the machine filesystem available after hibernation" instead of
  explaining storage or runtime orchestration internals.
- "Your deployment may offer different runtime or template choices" instead of
  naming private infrastructure providers.
- "Contact support or your workspace administrator" instead of telling users to
  inspect internal logs or services.

## Documentation Style

- Keep pages concise and practical. Lead with user actions, expected results,
  and important caveats.
- Use "machine" for a SnapVM workspace unless a page specifically defines the
  broader concept.
- Use "console" or "SnapVM console" for the web UI.
- Use "hibernate" or "stop" for idle behavior, and explain what persists:
  files, repositories, installed packages, configuration, and service
  definitions.
- Be precise about non-persistent state: interactive shell processes and
  in-memory data may stop when a machine hibernates.
- Do not promise availability, performance, regions, domains, runtime types,
  template lists, or CLI/API features unless the product currently exposes them
  publicly.
- Never include real customer data, credentials, tokens, private hostnames, or
  screenshots that reveal internal systems.

## English and Japanese Pages

- English source pages live in `src/content/docs/**`.
- Japanese source pages live in `src/content/docs/ja/**`.
- When changing user-facing concepts, update both languages unless the task is
  explicitly limited to one locale.
- Keep the Japanese pages equivalent in meaning to the English pages rather than
  translating word-for-word when that would sound unnatural.
- Preserve frontmatter fields and Starlight component imports.

## Site Structure

- Sidebar, locale, logo, and social link configuration live in
  `astro.config.mjs`.
- Shared Astro components live in `src/components/**`.
- CSS overrides live in `src/styles/custom.css`.
- Static assets live in `public/**` and `src/assets/**`.
- Avoid adding diagrams that reveal architecture internals. If a visual is
  useful, prefer user workflow diagrams over system topology diagrams.

## Commands

Use the package manager declared in `package.json`.

```bash
pnpm install
pnpm check
pnpm build
```

`pnpm build` writes the static site to `dist`.

## Review Checklist

Before finishing a documentation change, check:

- Is this useful to an end user trying to create, use, stop, or troubleshoot a
  machine?
- Could this reveal private implementation, deployment, security, or operations
  details?
- Does the page avoid unsupported CLI, MCP, admin, or operator-only workflows?
- Are English and Japanese pages kept in sync when appropriate?
- Do links, sidebar entries, frontmatter, and Starlight imports still match the
  site structure?

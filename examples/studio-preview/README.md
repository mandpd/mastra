# Studio Preview Example

This example is a small Vercel target for PR previews of Mastra Studio. It deploys Studio and a minimal Mastra API together, so reviewers can open the preview URL and test a working agent page.

The example is intentionally serverless-friendly:

- no file-backed storage
- no LibSQL or DuckDB dependency
- one deterministic tool
- one agent that can be opened at `/agents/studio-preview-agent/chat/new`

## Local usage

From the repository root:

```bash
pnpm --dir examples/studio-preview install
pnpm --dir examples/studio-preview build
```

For local Studio development:

```bash
cp examples/studio-preview/.env.example examples/studio-preview/.env
pnpm --dir examples/studio-preview dev
```

## Vercel project setup

Create one Vercel project for the repository and point it at this example.

- Root Directory: `examples/studio-preview`
- Build Command: `pnpm build`
- Install Command: use the default pnpm install detected by Vercel
- Output Directory: leave empty
- Node.js Version: 22.x
- Root Directory setting: enable source files outside the root directory

Add these environment variables for Preview deployments:

```text
OPENAI_API_KEY=...
MASTRA_PREVIEW_MODEL=__AI_SDK_OPENAI_MODEL_BASE__
```

Vercel will use the generated `.vercel/output` folder. Studio is served at `/`, and the Mastra API is served under `/api/*`.

Recommended preview URLs:

- `/` for the Studio shell
- `/agents` for the agent list
- `/agents/studio-preview-agent/chat/new` for the working agent chat

Protect the project with Vercel Deployment Protection or Studio auth before exposing previews broadly. Studio has access to the agents, tools, and workflows exposed by the Mastra server.

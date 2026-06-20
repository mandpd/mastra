import { Mastra } from '@mastra/core/mastra';
import { VercelDeployer } from '@mastra/deployer-vercel';
import { studioPreviewAgent } from './agents/studio-preview-agent';
import { previewStatusTool } from './tools/preview-status';

export const mastra = new Mastra({
  agents: {
    studioPreviewAgent,
  },
  tools: {
    previewStatusTool,
  },
  bundler: {
    sourcemap: true,
  },
  deployer: new VercelDeployer({
    studio: true,
    maxDuration: 60,
  }),
  server: {
    build: {
      swaggerUI: true,
    },
  },
});

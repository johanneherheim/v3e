import { defineConfig } from "sanity";
import { markdownSchema } from "sanity-plugin-markdown";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "4bjq1oea",
  dataset: "production",
  title: "Voss tre etappars studio",
  apiVersion: "2024-02-20",
  basePath: "/admin",
  plugins: [deskTool(), markdownSchema()],
  schema: { types: schemas },
});

export default config;

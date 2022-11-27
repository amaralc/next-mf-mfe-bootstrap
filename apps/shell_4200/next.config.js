const NextFederationPlugin = require('@module-federation/nextjs-mf');
//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, options) {
    const { isServer } = options;
      config.plugins.push(
        new NextFederationPlugin({
          name: 'shell_4200',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            shell_4200: `shell_4200@http://localhost:4200/_next/static/${
              isServer ? 'ssr' : 'chunks'
            }/remoteEntry.js`,
            remote_4201: `remote_4201@http://localhost:4201/_next/static/${
              isServer ? 'ssr' : 'chunks'
            }/remoteEntry.js`,
          },
          exposes: {
            './shell-4200': './pages/index',
            './pages-map': './pages-map.ts',
          },
          shared: {
            '@emotion/styled': {
              singleton: true,
              requiredVersion: false
            }
          },

        }),
      );

      return config;
  },
};

module.exports = withNx(nextConfig);

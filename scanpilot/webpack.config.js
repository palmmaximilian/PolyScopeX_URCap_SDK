const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    name: 'main',
    entry: './src/index.js',
    mode: 'production',
    devServer: {
      host: '0.0.0.0',
      hot: true,
      static: ['assets'],
      allowedHosts: 'all',
      compress: true,
      port: 4200,
    },
    output: {
        path: path.resolve(__dirname, 'dist/scanpilot'),
        filename: 'main.js'
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "./src/contribution.json" },
          { from: "./src/assets", to: path.resolve(__dirname, 'dist/scanpilot/assets') }
        ],
      }),
    ], 
  },
  {
    name: 'ScanPilot',
    entry: './src/application/ScanPilot.behavior.worker.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist/scanpilot'),
        filename: 'ScanPilot.worker.js'
    },
    optimization: {
      minimize: true,
        minimizer: [new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })]
    }
  },
  {
    name: 'ProgramSwitcher',
    entry: './src/program/ProgramSwitcher.behavior.worker.js',
      mode: 'production',
      output: {
      path: path.resolve(__dirname, 'dist/scanpilot'),
        filename: 'ProgramSwitcher.worker.js'
    },
    optimization: {
      minimize: true,
        minimizer: [new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })]
    }
  },
  {
    name: 'ScanPilot',
    entry: './src/smart-skill/ScanPilot.behavior.worker.js',
    mode: 'production',
    output: {
    path: path.resolve(__dirname, 'dist/scanpilot'),
      filename: 'ScanPilot.worker.js'
  },
    optimization: {
      minimize: true,
        minimizer: [new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })]
    }
  }
];

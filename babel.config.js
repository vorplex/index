const __DEV__ = process.env.NODE_ENV === 'development';
const targets = '>0.2%, not dead, not ie <= 11, not op_mini all';

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        development: __DEV__
      }
    ],
    [
      '@babel/preset-env',
      { loose: true, useBuiltIns: 'usage', corejs: 3, targets }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
};

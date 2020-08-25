const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~area': path.resolve(__dirname, 'src/components/page/area/area'),
        '~dark-area': path.resolve(
          __dirname,
          'src/components/page/area/dark-area/dark-area'
        ),
        '~light-area': path.resolve(
          __dirname,
          'src/components/page/area/light-area/light-area'
        ),
        '~page': path.resolve(__dirname, 'src/components/page/Page'),
      },
    },
  })
}

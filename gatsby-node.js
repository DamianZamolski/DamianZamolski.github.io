const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~area': path.resolve(__dirname, 'src/components/page/area/Area'),
        '~page': path.resolve(__dirname, 'src/components/page/Page'),
      },
    },
  })
}

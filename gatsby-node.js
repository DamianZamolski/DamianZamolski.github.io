const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: { '~Page': path.resolve(__dirname, 'src/components/page/Page') },
    },
  })
}

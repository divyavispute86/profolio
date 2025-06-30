const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    assetModuleFilename: "assets/[name][ext][query]" // Output directory for assets
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Image files
        type: "asset/resource"
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/, // Font files
        type: "asset/resource"
      },
      {
        test: /\.(csv|tsv)$/, // CSV and TSV files
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/, // XML files
        use: ["xml-loader"]
      },
      {
        test: /\.(pdf)$/i, // Match PDF files
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    historyApiFallback: true // Handle client-side routing
  },
  mode: "development"
};

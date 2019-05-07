const path = require("path");

const env =
  process.env.NODE_ENV === "production" ? "production" : "development";
const contentBase = path.resolve(path.join(__dirname, "public"));

module.exports = {
  mode: env,
  entry:{index: "./src/index.tsx", backend: "./src/backend.ts"},
  output: {
    filename: "[name].js",
    path: contentBase
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve("", "tsconfig.json")
          }
        }
      }
    ]
  },
  devServer: {
    contentBase,
    watchContentBase: true,
    writeToDisk: true
  },
  devtool: "source-map"
};

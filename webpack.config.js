

 const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 const HtmlWebpackPlugin = require("html-webpack-plugin");
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const path = require("path");

 
 module.exports = {
   entry: "./src/index.js",
   output: {
     path: path.resolve(__dirname, "dist"),
     filename: "[contenthash].bundle.js",
   },
   mode: "development",
   devServer: {
     contentBase: path.resolve(__dirname, "dist"),
     compress: true,
     port: 9000,
   },
   devtool: "source-map",
   resolve: {
     alias: {
       styles: path.resolve(__dirname, "src/styles"),
       images: path.resolve(__dirname, "src/assets/images"),
       fonts: path.resolve(__dirname, "src/assets/fonts"),
       csv: path.resolve(__dirname, "src/assets/csv"),
     },
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: "./src/index.html",
     }),
     new CleanWebpackPlugin(),
     new MiniCssExtractPlugin({
       filename: "[name].[contenthash].css",
     }),
   ],
 
   module: {
     rules: [
       {
         test: /\.m?js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: "babel-loader",
           options: {
             presets: ["@babel/preset-env"],
           },
         },
       },
       {
         test: /\.js$/,
         enforce: "pre",
         use: ["source-map-loader"],
       },
       {
         test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
         use: [
           {
             loader: "file-loader",
             options: {
               name: "[name].[ext]",
               outputPath: "fonts/",
             },
           },
         ],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         use: [
           {
             loader: "file-loader",
             options: {
               name: "[name].[ext]",
               outputPath: "images/",
             },
           },
         ],
       },
       {
         test: /\.(le|c)ss$/,
         use: [
           {
             loader: MiniCssExtractPlugin.loader,
             options: {
               publicPath: '',
             },
           },
           "css-loader",
           "less-loader",
         ],
       },
       {
         test: /\.csv$/,
         loader: "csv-loader",
         options: {
           dynamicTyping: true,
           header: true,
           skipEmptyLines: true,
         },
       },
     ],
   },
 };
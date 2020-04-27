const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const configSecure = require("./config-secure");
const S3Uploader = require("webpack-s3-uploader");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new S3Uploader({
      s3Options: {
        accessKeyId: configSecure.AWS_ACCESS_KEY_ID,
        secretAccessKey: configSecure.AWS_SECRET_ACCESS_KEY,
        region: configSecure.AWS_BUCKET_REGION,
      },
      s3UploadOptions: {
        Bucket: configSecure.AWS_BUCKET_NAME,
        CacheControl: "max-age=31536000",
      },
      basePath: configSecure.AWS_BUCKET_BASE_PATH,
      exclude: "index.html",
    }),
    new S3Uploader({
      s3Options: {
        accessKeyId: configSecure.AWS_ACCESS_KEY_ID,
        secretAccessKey: configSecure.AWS_SECRET_ACCESS_KEY,
        region: configSecure.AWS_BUCKET_REGION,
      },
      s3UploadOptions: {
        Bucket: configSecure.AWS_BUCKET_NAME,
        CacheControl: "no-store",
      },
      basePath: configSecure.AWS_BUCKET_BASE_PATH,
      include: "index.html",
    }),
  ],
});

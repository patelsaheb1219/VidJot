if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb://kishan:kishan1219@ds143163.mlab.com:43163/vidjot-prod"
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost/vidjot-dev"
  };
}

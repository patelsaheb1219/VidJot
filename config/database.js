if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb+srv://kishan123:kishan123@vidjot.zycp8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost/vidjot-dev"
  };
}

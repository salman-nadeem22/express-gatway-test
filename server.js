const path = require("path");
const gateway = require("express-gateway");
require("./app/user-service/server");
require("./app/music-service/server");

gateway().load(path.join(__dirname, "config")).run();

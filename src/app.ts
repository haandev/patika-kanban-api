import fs from "fs";
import { OoicConfig, ooic, express } from "@ooic/core";

const config: OoicConfig = {
  cors: {
    enabled: true,
    options: {
      credentials: true,
      origin: function (_origin, callback) {
        callback(null, true);
      },
    },
  },
  morgan: {
    enabled: true,
    format: "combined",
  },
  ssl: {
    enabled: true,
    key: fs.readFileSync("ssl/private.key"),
    cert: fs.readFileSync("ssl/certificate.crt"),
  },
  cookieParser: {
    enabled: true,
  },
};
(async () => {
  const app = await ooic(config);
})();

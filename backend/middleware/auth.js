import { extractBearerToken, extractTokenData } from "../utils/helpers.js";

export const auth = (req, res, next) => {
  const token = extractBearerToken(req.headers.authorization);
  const data = extractTokenData(token);

  if (!data) {
    return res.status(401).json({
      message: "Valid auth token required",
    });
  }

  req.authenticated = true;
  req.auth = data;

  next();
};

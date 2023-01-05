require("dotenv").config();

const TARKOV_API = process.env.TARKOV_API;
const TARKOV_API_KEY = process.env.TARKOV_API_KEY;

module.exports = { TARKOV_API, TARKOV_API_KEY };
exports.handler = async function(event, context) {
  const fetch = require("node-fetch");

  const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}";

  try {
      const response = await fetch(url);
      const data = await response.json();
      return {
          statusCode: 200,
          body: JSON.stringify(data)
      };
  } catch (error) {
      return {
          statusCode: 500,
          body: JSON.stringify({ error: "Gabim në marrjen e lajmeve" })
      };
  }
};
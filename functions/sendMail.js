const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const { httpMethod, body } = event;
  const formData = JSON.parse(body);

  if (httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const access_key = "e5ce6e8e-4711-4e88-b42e-e693d5cb2041";
  formData.access_key = access_key;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

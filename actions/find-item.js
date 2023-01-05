const Constants = require("../constants");

const findItem = async (itemName) => {
  try {
    console.log(itemName);
    const response = await fetch(Constants.TARKOV_API + `/item?q=${itemName}`, {
      headers: { "x-api-key": Constants.TARKOV_API_KEY },
      method: "get",
    });

    const data = await response.json();

    return data[0];
  } catch (err) {
    console.log(err);

    return null;
  }
};

module.exports = findItem;
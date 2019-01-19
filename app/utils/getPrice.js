const fetch = require ('node-fetch')

// pass in parameter such as "btc-usd","ltc-usd"
export const getPrice = async(coin) => {
    try {
      let response = await fetch('https://api.cryptonator.com/api/ticker/'+coin);
      let responseJson = await response.json();
      console.log(responseJson)
      return(responseJson.balance)
    } catch (error) {console.error(error);}
}
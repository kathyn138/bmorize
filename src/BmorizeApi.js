import axios from "axios";
import { v4 as uuid } from "uuid";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

class BmorizeApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {

    paramsOrData._token = localStorage.token;

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: BASE_URL + endpoint
      })).data;
    }

    catch (err) {
      console.error("API Error:", err.response);
      const message = err.response.status;
      throw message;
    }
  }

  static async getNewShuffledDeck() {
    let res = await this.request("/new/shuffle");
    return res.deck_id;
  }

  // Fisher-Yates shuffle
  static shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  static formatCardData(cards) {
    let unformattedRes = [];

    for (const card of cards) {
      let firstCopy = {};
      firstCopy["value"] = card["code"];
      firstCopy["id"] = uuid();
      firstCopy["image"] = card["image"];
      unformattedRes.push(firstCopy);

      let secondCopy = { ...firstCopy };
      secondCopy["id"] = uuid();
      unformattedRes.push(secondCopy);
    }

    let shuffledRes = this.shuffle(unformattedRes);
    let formattedRes = [];

    // divide cards into rows of 6
    for (let i = 0; i < unformattedRes.length; i += 6) {
      formattedRes.push(shuffledRes.slice(i, i + 6));
    }

    return formattedRes;
  }

  static async getCards(level) {
    let cardCount;

    if (level === 'easy') {
      cardCount = 9;
    } else if (level === 'medium') {
      cardCount = 15;
    } else {
      cardCount = 24;
    }

    let deckId = await this.getNewShuffledDeck();
    let res = await this.request(`/${deckId}/draw/?count=${cardCount}`);
    let formattedRes = this.formatCardData(res.cards);

    return formattedRes;
  }
}

export default BmorizeApi;
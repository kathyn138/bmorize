import axios from "axios";
import { v4 as uuid } from "uuid";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

class BmorizeApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.token;

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (
        await axios({
          method: verb,
          url: BASE_URL + endpoint,
        })
      ).data;
    } catch (err) {
      console.error("API Error:", err.response);
      const message = err.response.status;
      throw message;
    }
  }

  // get new deck id from api
  static async getNewDeckId() {
    let res = await this.request("/new/shuffle");
    return res.deck_id;
  }

  // fisher-yates shuffle
  static shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  /**
   * build new object for each card,
   * create duplicates, shuffle all cards,
   * and divide cards into rows
   * returns {rowIdx: [{ card1 }, { card2 } , ...]}
   */
  static formatCardData(cards, cardsPerRow) {
    let unformattedRes = [];

    /**
     * card objects represented as
     * { value, id, image }
     */
    for (const card of cards) {
      let firstCopy = {};
      firstCopy["value"] = card["code"];
      firstCopy["id"] = uuid();
      firstCopy["image"] = card["image"];

      let secondCopy = { ...firstCopy };
      secondCopy["id"] = uuid();

      unformattedRes.push(firstCopy, secondCopy);
    }

    let shuffledRes = this.shuffle(unformattedRes);
    let formattedRes = {};

    // divide cards into rows
    let rowIdx = 0;

    for (let i = 0; i < unformattedRes.length; i += cardsPerRow) {
      formattedRes[rowIdx] = shuffledRes.slice(i, i + cardsPerRow);
      rowIdx++;
    }

    return formattedRes;
  }

  /**
   * return shuffled and formatted card data
   * number of cards returned depends on selected level
   */
  static async getCards(level) {
    let numOfUniqueCards;

    if (level === "easy") {
      numOfUniqueCards = 9;
    } else if (level === "medium") {
      numOfUniqueCards = 15;
    } else {
      numOfUniqueCards = 24;
    }

    let deckId = await this.getNewDeckId();
    let res = await this.request(`/${deckId}/draw/?count=${numOfUniqueCards}`);
    let formattedRes = this.formatCardData(res.cards, 6);

    return formattedRes;
  }
}

export default BmorizeApi;

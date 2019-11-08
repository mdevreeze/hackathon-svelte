import { TrelloClient } from "trello.ts";
import { TrelloApiKey, TrelloToken } from "./config";

export class TrelloService {
    constructor() {
        this.trelloClient = new TrelloClient({
            key: TrelloApiKey,
            token: TrelloToken,
        });
    }

    async getCards(boardId) {
        return this.trelloClient.board.getCards({id: boardId});
    }

    async getBoards() {
        return this.trelloClient.organizations.getBoards({
            id: "dreamteam593",
        });
    }
}
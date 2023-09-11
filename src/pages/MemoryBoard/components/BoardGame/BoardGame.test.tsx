import { cleanup, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BoardGame } from ".";
import { Card } from "../../interfaces/card.interface";

const client = new QueryClient();

const cards: Card[] = [{"id":"8zbL5c3RHDUjr77Fua0E","cardPairID":1,"flipped":false,"revealed":false,"content":"3.png"},{"id":"lFmyZQkJDwnl2AJ5PPM7","cardPairID":2,"flipped":false,"revealed":false,"content":"4-1.png"},{"id":"iTqrD7JLwuvMsZJwIZ2d","cardPairID":7,"flipped":false,"revealed":false,"content":"15-1.png"},{"id":"fmwRBgQnQKBooqgQb0Tx","cardPairID":9,"flipped":false,"revealed":false,"content":"17-1.png"},{"id":"0CacTBYht8jGQT5OceuG","cardPairID":2,"flipped":false,"content":"4.png","revealed":false},{"id":"SFlwPECbo4I8peQPPYFm","cardPairID":8,"flipped":false,"revealed":false,"content":"16.png"},{"id":"hbrrKOADpTtM57M7m5pb","cardPairID":4,"flipped":false,"revealed":false,"content":"8.png"},{"id":"JXhhiQsNRVQ4vG5DFLjm","cardPairID":5,"flipped":false,"revealed":false,"content":"9-1.png"},{"id":"4HYUJ3BYQNtZfu8B2FJ6","cardPairID":1,"flipped":false,"revealed":false,"content":"3-1.png"},{"id":"fOkRcNfBB788mPlZZrgL","cardPairID":9,"flipped":false,"revealed":false,"content":"17.png"},{"id":"eKCY1TxQl2jV506BiIkp","flipped":false,"revealed":false,"content":"8-1.png","cardPairID":4},{"id":"Y8k2spUMtPayT13VuDPS","cardPairID":7,"flipped":false,"revealed":false,"content":"15.png"},{"id":"jplU7xRmmXkBe0AdhkLX","cardPairID":8,"flipped":false,"revealed":false,"content":"16-1.png"},{"id":"T9kMZ02SxIUm0GQJxdSy","cardPairID":3,"flipped":false,"revealed":false,"content":"5-1.png"},{"id":"WVxZrDAzNuTRXlDJxRCo","cardPairID":3,"flipped":false,"revealed":false,"content":"5.png"},{"id":"ll5MpQX28xHQib6U2tC4","cardPairID":5,"flipped":false,"revealed":false,"content":"9.png"},{"id":"UntQ56Xzza93stj7CQW2","cardPairID":6,"flipped":false,"revealed":false,"content":"10.png"},{"id":"AZuOKtLdG8ZEaJO48u1z","cardPairID":6,"flipped":false,"revealed":false,"content":"10-1.png"}];

describe('BoardGame', () => {
    afterEach(cleanup);
    it('should render', () => {
        render(
            <QueryClientProvider client={client}>
                <BoardGame />
            </QueryClientProvider>); 
        expect(screen.getByRole('board')).toBeDefined();
    });
});
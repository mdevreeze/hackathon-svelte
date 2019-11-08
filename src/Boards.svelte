<script>
    import Cards from './Cards.svelte';
    import { TrelloService } from './trelloService';
    export let boards = [];
    let selectedBoard = undefined; 
    let cards = [];
    const trelloService = new TrelloService();
    trelloService.getBoards().then((b) => {
        console.log(b);
        boards = b;
    })

    function handleClick(id) {
        selectedBoard = id;
        trelloService.getCards(selectedBoard).then((c) => {
            cards = c;
        })
    }
</script>

<style>
    button { margin: 0 10px }
</style>

<h2>Boards:</h2>
{#each boards as board}
    <button on:click={() => handleClick(board.id)}> {board.name} </button>
{/each}

<Cards cards={cards} />

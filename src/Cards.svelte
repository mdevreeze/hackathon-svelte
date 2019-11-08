<script>
    export let cards = [];
</script>

{#each cards as card}
    <h3>{card.name}</h3>
    <p>{card.desc}</p>
{/each}
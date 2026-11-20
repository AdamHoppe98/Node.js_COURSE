<script>
import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

console.log($fridgeMessages);


</script>

<h3>~ $, sweet ~ $</h3>

{#each $fridgeMessages as {name, message}}
    <p>{name}: {message}</p>

{/each}

<slot></slot>

<p id="welcome-mat">
    Welcome
</p>


<style>
    #welcome-mat{
        font-size: 2em;
        height: 5em;
        border: 2px solid goldenrod;
    }
</style>
<script>
    import Child from "../Child/Child.svelte";

    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    const { name, children } = $props();


    function wipeFridge() {
        fridgeMessages.wipe();
    }




    // const cookies = ["Chocolate cookie", "Peanut Butter cookie", "Gingerbread cookie", "Double Chocolate cookie"]
    // const cookieJar = $state(cookies)

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪"]);

    function handleShowLove(name = "") {
        console.log(`${name}, loves me.`);
    }

    // assignemetn
    // create handleEatCookie and onEatCookie
    // children should be able to eat a cookie
    // the parents should be the ones who have access to the cookie jar
    // when a child eats a cookie it disapears form the cookie jar

    function handleEatCookie() {
        // if(cookieJar.length > 0){
        //     console.log(`${name} just ate a cookie ${cookieJar.pop()}`)
        //     return
        // }
        // console.log("no more cookies");
        // cookieJar.push(... cookies)
        // console.log("cookie jar has been replenished", cookieJar);
        cookieJar.pop();
        if (cookieJar.length === 0) {
            cookieJar = ["🍪", "🍪", "🍪", "🍪"];
        }
    }



</script>

<p>{cookieJar}</p>
<h1>Hi, I am {name}</h1>

<button onclick={wipeFridge}>Wipe Fridge</button>

{#each children as child (child.id)}
    <Child
        {...child}
        onShowLove={handleShowLove}
        onEatCookie={handleEatCookie}
        bind:cookieCount={cookieJar.length}
    />
{/each}

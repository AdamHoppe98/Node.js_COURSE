<!-- 
    why write the component with Pascal case

    1. Easy to differentiate to see what is a component and what is plain html when it is used as a tag
    2. historical reasons: components used to be classes, and classes used to be pascal
-->
<script>
    let { weapon, damage } = $props();
    console.log(weapon, damage);
    
    function resetDamage(){
        damage = 0;
    }
</script>

<h4>Weapons</h4>

<p>{weapon}</p>
<p>{damage}</p>
<button onclick={() => damage++} >Increase Damage</button>
<button onclick={resetDamage} >Reset Damage</button>



<script>
    import Planets from "./components/Planets/Planets.svelte";
    import Weapons from "./components/Weapons/Weapons.svelte";

  
  const version = "First";
  
</script>

<h1>My {version} Svelte App</h1>

<h3>Under construction</h3>

<Weapons weapon={"scimitar"} damage={4} ></Weapons>
<Planets></Planets>



<style>
  h1 {
    color: bisque;
  }
</style>

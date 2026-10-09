fetch('/api/plants')
.then(response => response.json())
.then(result => {
    console.log(result)
    const plantListDataList = document.getElementById("plants-list");

    result.data.forEach(plant => {
    const plantsListOption = document.createElement('option');
    plantsListOption.value = plant.slug;

    plantListDataList.appendChild(plantsListOption)

    })
});

async function addPlant() {
    const plantSlug = document.getElementById('plants-list-search-input').value;
    
    const plantSection = document.getElementById('plants')

    const response = await fetch(`/api/plants/${plantSlug}`)
    const result = await response.json();

    const plant = result.data;
    console.log(plant);
    

    const plantsDiv = document.createElement('div')
    plantsDiv.innerHTML = `
        <h3>New Plant</h3>
    `



}
const ANIMALS_URL = "/animals";

const getAnimals = async () => {
    const response = await fetch(ANIMALS_URL);
    if (!response.ok) {
        throw new Error(`Response status ${response.status}`);
    }
    const result = await response.json();
    return result.data;
};


const showAnimals = async () => {
    const app = document.getElementById("app");
    try {
        const animals = await getAnimals();
        const listEl = document.createElement("ul");
        animals.forEach(animal => {
            const animalItem = document.createElement("li");
            const name = document.createElement("p");
            name.textContent = animal.name;
            animalItem.appendChild(name);
            const age = document.createElement("p");
            age.textContent = animal.age;
            animalItem.appendChild(age);
            listEl.appendChild(animalItem);
        });
        app.appendChild(listEl);
    } catch (err) {
        console.error(err);
        app.textContent = "Could not load animals.";
    }
}; 

showAnimals()
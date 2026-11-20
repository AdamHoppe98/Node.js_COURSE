import { writable } from "svelte/store";

function fridgeMessageCustomStore(){
    const prompt = [
        { name: "", message: "Write your message below"}
    ]
    const { subscribe, set, update } = writable(prompt);

    return {
        subscribe,
        set,
        update,
        wipe: () => set(prompt),

    }
    
}

export const fridgeMessages = fridgeMessageCustomStore();



// export const fridgeMessages = writable([
//     { name: "", message: "Write your message below"}
// ]);


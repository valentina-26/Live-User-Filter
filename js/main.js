import { getAllInfoPeople } from "./module/app.js";
import { profiles } from "./components/gallery.js";

let input__search = document.querySelector("#input__search");
let main__section__persons = document.querySelector(".main");

addEventListener("DOMContentLoaded", async () => {
    let info = await getAllInfoPeople();
    console.log(info);

    main__section__persons.innerHTML = await profiles(info); // Cargue personas por default
    

    input__search.addEventListener("input", async e => {
        
        const searchTerm = e.target.value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Obtener el valor del input y convertirlo a minusculas y sin espacios

        const filteredProfiles = info.filter(person => {
            return person.name_full.toLowerCase().includes(searchTerm) || person.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchTerm)  ; // Comparar si el nombre de la persona incluye el termino de busqueda
        });
    
        main__section__persons.innerHTML = await profiles(filteredProfiles);

    });
})




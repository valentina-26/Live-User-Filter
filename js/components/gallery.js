export const profiles = async (info) => {
    let plantilla = "";

    for (let i = 0; i < info.length; i++) {
        plantilla += `
        <div class="people">
        <img src="${info[i].avatar}" alt="img">
        <div class="text">
            <h5>${info[i].name_full}</h5>
            <span>${info[i].description}</span>
        </div>
        </div> 
        <hr> 
            `;
    }
    return plantilla;
};

const url = 'https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins_not_grouped.json';

const rarityColors = {
    "Consumer Grade": "#b0c3d9",
    "Industrial Grade": "#5e98d9",
    "Mil-Spec Grade": "#4b69ff",
    "Restricted": "#8847ff",
    "Classified": "#d32ce6",
    "Covert": "#eb4b4b",
    "Contraband": "#e4ae39"
};

async function GetCSGOData() {
    const csgo = await fetch(url);
    const skins = await csgo.json();
    return skins;
}

function GetRandomSkin(skins) {
    const randomindex = Math.floor(Math.random() * skins.length)
    return skins[randomindex];
}

function ShowSkin(skin) {
    document.getElementById("SkinName").innerText = skin.name;
    document.getElementById("SkinRarity").innerText = `Ritkaság: ${skin.rarity.name}`;
    document.getElementById("SkinImg").src = skin.image;

    const rarityName = skin.rarity.name;
    const img = document.getElementById("SkinImg");
    const name = document.getElementById("SkinName");
    const skinrarity=document.getElementById("SkinRarity");

    if (rarityColors[rarityName]) {
        img.style.borderColor = rarityColors[rarityName];
        img.style.boxShadow = `0 0 25px ${rarityColors[rarityName]}`;
        name.style.color = rarityColors[rarityName];
        skinrarity.style.color = rarityColors[rarityName];
    }
}


document.getElementById("GenerateButton").addEventListener("click", async () => {
    const skins = await GetCSGOData();
    const randomSkin = GetRandomSkin(skins);
    ShowSkin(randomSkin);
});


async function OpenCase() {
    const skins = await GetCSGOData();

    for (let i = 0; i < 15; i++) {
        const randomSkin = GetRandomSkin(skins);
        ShowSkin(randomSkin);
        await new Promise(x => setTimeout(x, 100));
    }

    const finalSkin = GetRandomSkin(skins);
    ShowSkin(finalSkin);
}
document.getElementById("GenerateButton").addEventListener("click", OpenCase);
const url = 'https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins_grouped.json';

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
    let button = document.getElementById("GenerateButton");
    button.addEventListener("click", async () => {
        const skins = await GetCSGOData();
        const randomSkin = GetRandomSkin(skins);
        ShowSkin(randomSkin);
    });
}
function convertItems(items) {
    const hasil = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.includes("|")) {
            hasil.push(item.split("|"));
        } else {
            hasil.push([item]);
        }
    }
    return hasil;
}

function filterItems(items) {
    return items.filter(item => {
        if (item.length < 2) {
            return false; // item tidak memiliki harga dan kategori
        }
        if (isNaN(item[1])) {
            return false; // harga tidak valid
        }
        item[1] = parseInt(item[1]); // mengubah harga menjadi integer
        return true;
    });
}

function generateSpareParts(items) {
    return items.map(item => {
        return {
            name: item[0],
            price: parseInt(item[1]),
            category: item[2]
        };
    });
}

function itemsStatistics(items) {
    const statistics = {
        variation: 0,
        bodyParts: 0,
        electricity: 0,
    };

    for (let i = 0; i < items.length; i++) {
        const category = items[i][2];
        if (category === "variation") {
            statistics.variation++;
        } else if (category === "bodyParts") {
            statistics.bodyParts++;
        } else if (category === "electricity") {
            statistics.electricity++;
        }
    }

    return statistics;
}

function generateItemsData(items) {
    const spare_parts = [];

    for (let i = 0; i < items.length; i++) {
        const itemData = items[i].split("|");
        const itemName = itemData[0];
        const itemPrice = parseInt(itemData[1]);
        const itemCategory = itemData[2];

        if (itemName && !isNaN(itemPrice) && itemCategory) {
            const item = {
                name: itemName,
                price: itemPrice,
                category: itemCategory,
            };

            spare_parts.push(item);
        }
    }

    const statistics = {
        variation: 0,
        bodyParts: 0,
        electricity: 0,
    };

    for (let i = 0; i < spare_parts.length; i++) {
        const category = spare_parts[i].category;
        if (category === "variation") {
            statistics.variation++;
        } else if (category === "bodyParts") {
            statistics.bodyParts++;
        } else if (category === "electricity") {
            statistics.electricity++;
        }
    }

    return {
        spare_parts,
        statistics
    };
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}
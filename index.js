var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Редкость
var RARITY;
(function (RARITY) {
    RARITY[RARITY["COMMON"] = 0] = "COMMON";
    RARITY[RARITY["RARE"] = 1] = "RARE";
    RARITY[RARITY["EPIC"] = 2] = "EPIC";
    RARITY[RARITY["LEGENDARY"] = 3] = "LEGENDARY";
})(RARITY || (RARITY = {}));
// Тип предмета
var ITEMTYPE;
(function (ITEMTYPE) {
    ITEMTYPE[ITEMTYPE["HELMET"] = 0] = "HELMET";
    ITEMTYPE[ITEMTYPE["WEAPON"] = 1] = "WEAPON";
    ITEMTYPE[ITEMTYPE["SHIELD"] = 2] = "SHIELD";
    ITEMTYPE[ITEMTYPE["ARMOR"] = 3] = "ARMOR";
})(ITEMTYPE || (ITEMTYPE = {}));
// Класс предмета
var Item = /** @class */ (function () {
    function Item(settings) {
        this.name = settings.name;
        this.rarity = settings.rarity;
        this.itemType = settings.itemType;
    }
    return Item;
}());
// База предметов, ключ - ID предмета.
var itemsBase = {
    1: new Item({ name: 'COMMON HELMET 1', rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET }),
    2: new Item({ name: 'COMMON HELMET 2', rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET }),
    3: new Item({ name: 'RARE HELMET 1', rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET }),
    4: new Item({ name: 'RARE HELMET 2', rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET }),
    5: new Item({ name: 'EPIC HELMET 1', rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET }),
    6: new Item({ name: 'EPIC HELMET 2', rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET }),
    7: new Item({ name: 'LEGENDARY HELMET 1', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET }),
    8: new Item({ name: 'LEGENDARY HELMET 2', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET }),
    9: new Item({ name: 'COMMON WEAPON 1', rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON }),
    10: new Item({ name: 'COMMON WEAPON 2', rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON }),
    11: new Item({ name: 'RARE WEAPON 1', rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON }),
    12: new Item({ name: 'RARE WEAPON 2', rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON }),
    13: new Item({ name: 'EPIC WEAPON 1', rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON }),
    14: new Item({ name: 'EPIC WEAPON 2', rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON }),
    15: new Item({ name: 'LEGENDARY WEAPON 1', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON }),
    16: new Item({ name: 'LEGENDARY WEAPON 2', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON }),
    17: new Item({ name: 'COMMON SHIELD 1', rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD }),
    18: new Item({ name: 'COMMON SHIELD 2', rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD }),
    19: new Item({ name: 'RARE SHIELD 1', rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD }),
    20: new Item({ name: 'RARE SHIELD 2', rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD }),
    21: new Item({ name: 'EPIC SHIELD 1', rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD }),
    22: new Item({ name: 'EPIC SHIELD 2', rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD }),
    23: new Item({ name: 'LEGENDARY SHIELD 1', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD }),
    24: new Item({ name: 'LEGENDARY SHIELD 2', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD }),
    25: new Item({ name: 'COMMON ARMOR 1', rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR }),
    26: new Item({ name: 'COMMON ARMOR 2', rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR }),
    27: new Item({ name: 'RARE ARMOR 1', rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR }),
    28: new Item({ name: 'RARE ARMOR 2', rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR }),
    29: new Item({ name: 'EPIC ARMOR 1', rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR }),
    30: new Item({ name: 'EPIC ARMOR 2', rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR }),
    31: new Item({ name: 'LEGENDARY ARMOR 1', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR }),
    32: new Item({ name: 'LEGENDARY ARMOR 2', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR }),
    // пример добавления экземпляра предмета
};
// Генерируем предметы
var generateItemsBase = (function () {
    var currentID = 2;
    for (var itemType in ITEMTYPE) {
        if (typeof itemType === 'string') {
            continue;
        }
        for (var rarity in RARITY) {
            if (typeof rarity === 'string') {
                continue;
            }
            for (var i = 0; i < 2; i++) {
                var itemName = "".concat(rarity, " ").concat(itemType, " ").concat(i + 1);
                var itemSettings = {
                    name: itemName,
                    rarity: rarity,
                    itemType: itemType
                };
                itemsBase[currentID] = new Item(itemSettings);
                currentID++;
            }
        }
    }
});
// Класс простого бустерпака
var Booster = /** @class */ (function () {
    function Booster(settings) {
        this.rarityDestribution = settings.rarityDestribution;
    }
    Booster.prototype.getSpecificItems = function (rarity, itemType) {
        var possibleItems = [];
        var IDsList = [];
        for (var i in itemsBase) {
            if (itemType !== undefined) {
                if (itemsBase[i].rarity == rarity && itemsBase[i].itemType == itemType) {
                    possibleItems.push(itemsBase[i]);
                    IDsList.push(+i);
                }
            }
            else {
                if (itemsBase[i].rarity == rarity) {
                    possibleItems.push(itemsBase[i]);
                    IDsList.push(+i);
                }
            }
        }
        return { items: possibleItems, Ids: IDsList };
    };
    Booster.prototype.addToInventorhy = function (playerInventory, ID) {
        if (playerInventory[+ID]) {
            playerInventory[+ID]++;
        }
        else {
            playerInventory[+ID] = 1;
        }
    };
    Booster.prototype.pickRandomItem = function (possibleItems, IDsList) {
        var idx = Math.floor(Math.random() * possibleItems.length);
        var randomItem = possibleItems[idx];
        return { item: randomItem, id: IDsList[idx] };
    };
    Booster.prototype.defineLoot = function () {
        var loot = [];
        var lootIndexs = [];
        for (var _i = 0, _a = this.rarityDestribution; _i < _a.length; _i++) {
            var rarityEntry = _a[_i];
            for (var i = 0; i < rarityEntry.count; i++) {
                var itemRarity = rarityEntry.rarity;
                var possibleItemsData = this.getSpecificItems(itemRarity);
                var possibleItems = possibleItemsData.items;
                var IDsList = possibleItemsData.Ids;
                var randomResult = this.pickRandomItem(possibleItems, IDsList);
                lootIndexs.push(randomResult.id);
                loot.push(randomResult.item);
            }
        }
        var lootData = { items: loot, Ids: lootIndexs };
        return lootData;
    };
    Booster.prototype.getBoosterLoot = function (playerInventory) {
        var loot = this.defineLoot();
        for (var _i = 0, _a = loot.Ids; _i < _a.length; _i++) {
            var item = _a[_i];
            this.addToInventorhy(playerInventory, +item);
        }
        return loot.items;
    };
    return Booster;
}());
// Класс бустерпака удачи
var LuckBooster = /** @class */ (function (_super) {
    __extends(LuckBooster, _super);
    function LuckBooster(settings) {
        var _this = _super.call(this, settings) || this;
        _this.increaceChance = settings.increaceChance;
        return _this;
    }
    LuckBooster.prototype.getIncreaceRarityChance = function () {
        return Math.floor(Math.log(Math.random()) / Math.log(this.increaceChance
            * Math.pow(10, -2)));
    };
    LuckBooster.prototype.getLuckUpgrades = function (loot) {
        var lootIndexs = [];
        var upgradedItems = [];
        for (var i in loot.items) {
            var upgradeStep = this.getIncreaceRarityChance();
            if (!upgradeStep) {
                upgradedItems.push(loot.items[i]);
                lootIndexs.push(loot.Ids[i]);
                continue;
            }
            var currentRarity = loot.items[i].rarity;
            var upgradedRarity = 0;
            if (currentRarity + upgradeStep <= RARITY.LEGENDARY) {
                upgradedRarity = currentRarity + upgradeStep;
            }
            else {
                upgradedRarity = currentRarity;
            }
            var possibleItemsData = this.getSpecificItems(upgradedRarity, loot.items[i].itemType);
            var possibleItems = possibleItemsData.items;
            var IDsList = possibleItemsData.Ids;
            var randomResult = _super.prototype.pickRandomItem.call(this, possibleItems, IDsList);
            lootIndexs.push(randomResult.id);
            upgradedItems.push(randomResult.item);
        }
        var lootData = { items: upgradedItems, Ids: lootIndexs };
        return lootData;
    };
    LuckBooster.prototype.getBoosterLoot = function (playerInventory) {
        var loot = _super.prototype.defineLoot.call(this);
        var upgradedLoot = this.getLuckUpgrades(loot);
        for (var _i = 0, _a = upgradedLoot.Ids; _i < _a.length; _i++) {
            var item = _a[_i];
            this.addToInventorhy(playerInventory, +item);
        }
        return upgradedLoot.items;
    };
    return LuckBooster;
}(Booster));
var UniformBooster = /** @class */ (function (_super) {
    __extends(UniformBooster, _super);
    function UniformBooster(settings) {
        return _super.call(this, settings) || this;
    }
    UniformBooster.prototype.getUniformItems = function (f) {
        var itemsTotal = this.rarityDestribution[0].count + this.rarityDestribution[1].count;
        var lootIndexs = [];
        var items = [];
        if (itemsTotal < 4) {
            throw new Error("Must have at least 4 items");
        }
        var typesCount = Object.keys(ITEMTYPE).length / 2;
        var uniformItemsLeft = typesCount;
        var typesList = [];
        for (var i = 0; i < typesCount; i++) {
            typesList.push(i);
        }
        for (var _i = 0, _a = this.rarityDestribution; _i < _a.length; _i++) {
            var rarityEntry = _a[_i];
            for (var i = 0; i < rarityEntry.count; i++) {
                if (uniformItemsLeft > 0) {
                    var typesListIndex = Math.floor(Math.random() * uniformItemsLeft);
                    var itemType = typesList[typesListIndex];
                    uniformItemsLeft--;
                    typesList.splice(typesListIndex, 1);
                    var possibleItemsData = _super.prototype.getSpecificItems.call(this, rarityEntry.rarity, itemType);
                    var possibleItems = possibleItemsData.items;
                    var IDsList = possibleItemsData.Ids;
                    var randomResult = _super.prototype.pickRandomItem.call(this, possibleItems, IDsList);
                    lootIndexs.push(randomResult.id);
                    items.push(randomResult.item);
                }
                else {
                    var possibleItemsData = _super.prototype.getSpecificItems.call(this, rarityEntry.rarity);
                    var possibleItems = possibleItemsData.items;
                    var IDsList = possibleItemsData.Ids;
                    var randomResult = _super.prototype.pickRandomItem.call(this, possibleItems, IDsList);
                    lootIndexs.push(randomResult.id);
                    items.push(randomResult.item);
                }
            }
        }
        return { items: items, Ids: lootIndexs };
    };
    UniformBooster.prototype.getBoosterLoot = function (playerInventory) {
        var loot = this.getUniformItems();
        var upgradedLoot = _super.prototype.getLuckUpgrades.call(this, loot);
        for (var _i = 0, _a = upgradedLoot.Ids; _i < _a.length; _i++) {
            var item = _a[_i];
            this.addToInventorhy(playerInventory, +item);
        }
        return upgradedLoot.items;
    };
    return UniformBooster;
}(LuckBooster));
var CollectionBooster = /** @class */ (function (_super) {
    __extends(CollectionBooster, _super);
    function CollectionBooster(settings) {
        return _super.call(this, settings) || this;
    }
    CollectionBooster.prototype.pickInverselyProportional = function (possibleItems, IDsList, inventory) {
        var probabilities = IDsList.map(function (item) { return 1 / (inventory[item] || 1); });
        console.log(probabilities);
        // Нормализуем вероятности так, чтобы их сумма была равна 1
        var totalProbability = probabilities.reduce(function (sum, prob) { return sum + prob; }, 0);
        console.log(totalProbability);
        var normalizedProbabilities = probabilities.map(function (prob) { return prob / totalProbability; });
        console.log(normalizedProbabilities);
        var random = Math.random();
        console.log(random);
        var probSum = 0;
        for (var i = 0; i < normalizedProbabilities.length; i++) {
            probSum = probSum + normalizedProbabilities[i];
            if (random <= probSum) {
                return { item: possibleItems[i], id: IDsList[i] };
            }
        }
    };
    CollectionBooster.prototype.getCollectionItems = function () {
        var itemsTotal = this.rarityDestribution[0].count + this.rarityDestribution[1].count;
        var lootIndexs = [];
        var items = [];
        if (itemsTotal < 4) {
            throw new Error("Must have at least 4 items");
        }
        var typesCount = Object.keys(ITEMTYPE).length / 2;
        var uniformItemsLeft = typesCount;
        var typesList = [];
        for (var i = 0; i < typesCount; i++) {
            typesList.push(i);
        }
        for (var _i = 0, _a = this.rarityDestribution; _i < _a.length; _i++) {
            var rarityEntry = _a[_i];
            for (var i = 0; i < rarityEntry.count; i++) {
                if (uniformItemsLeft > 0) {
                    var typesListIndex = Math.floor(Math.random() * uniformItemsLeft);
                    var itemType = typesList[typesListIndex];
                    uniformItemsLeft--;
                    typesList.splice(typesListIndex, 1);
                    var possibleItemsData = _super.prototype.getSpecificItems.call(this, rarityEntry.rarity, itemType);
                    var possibleItems = possibleItemsData.items;
                    var IDsList = possibleItemsData.Ids;
                    var randomResult = this.pickInverselyProportional(possibleItems, IDsList, inventory);
                    lootIndexs.push(randomResult.id);
                    items.push(randomResult.item);
                }
                else {
                    var possibleItemsData = _super.prototype.getSpecificItems.call(this, rarityEntry.rarity);
                    var possibleItems = possibleItemsData.items;
                    var IDsList = possibleItemsData.Ids;
                    var randomResult = this.pickInverselyProportional(possibleItems, IDsList, inventory);
                    lootIndexs.push(randomResult.id);
                    items.push(randomResult.item);
                }
            }
        }
        return { items: items, Ids: lootIndexs };
    };
    CollectionBooster.prototype.getBoosterLoot = function (playerInventory) {
        var loot = this.getCollectionItems();
        var upgradedLoot = _super.prototype.getLuckUpgrades.call(this, loot);
        for (var _i = 0, _a = upgradedLoot.Ids; _i < _a.length; _i++) {
            var item = _a[_i];
            this.addToInventorhy(playerInventory, +item);
        }
        return upgradedLoot.items;
    };
    return CollectionBooster;
}(UniformBooster));
// коллекция экземпляров бустерпаков, ключ - ID бустерпака
var boostersBase = {
    1: new Booster({ rarityDestribution: [
            { rarity: RARITY.RARE, count: 3 },
            { rarity: RARITY.COMMON, count: 2 }
        ]
    }),
    2: new Booster({ rarityDestribution: [
            { rarity: RARITY.LEGENDARY, count: 1 },
            { rarity: RARITY.EPIC, count: 3 }
        ] }),
    3: new LuckBooster({ rarityDestribution: [
            { rarity: RARITY.RARE, count: 3 },
            { rarity: RARITY.COMMON, count: 2 }
        ],
        increaceChance: 10
    }),
    4: new LuckBooster({ rarityDestribution: [
            { rarity: RARITY.LEGENDARY, count: 1 },
            { rarity: RARITY.EPIC, count: 3 }
        ],
        increaceChance: 45
    }),
    5: new UniformBooster({ rarityDestribution: [
            { rarity: RARITY.RARE, count: 3 },
            { rarity: RARITY.COMMON, count: 2 }
        ],
        increaceChance: 10
    }),
    6: new UniformBooster({ rarityDestribution: [
            { rarity: RARITY.LEGENDARY, count: 1 },
            { rarity: RARITY.EPIC, count: 3 }
        ],
        increaceChance: 45
    }),
    7: new CollectionBooster({ rarityDestribution: [
            { rarity: RARITY.RARE, count: 3 },
            { rarity: RARITY.COMMON, count: 2 }
        ],
        increaceChance: 10
    }),
    8: new CollectionBooster({ rarityDestribution: [
            { rarity: RARITY.LEGENDARY, count: 1 },
            { rarity: RARITY.EPIC, count: 3 }
        ],
        increaceChance: 45
    }),
};
// API
// функция открытия бустерпака
function getBoosterLoot(boosterID, playerInventory) {
    return boostersBase[boosterID].getBoosterLoot(playerInventory);
}
// TEST
var inventory = {};
console.log(getBoosterLoot(1, inventory));
console.log(inventory);
console.log(getBoosterLoot(2, inventory));
console.log(inventory);
console.log(getBoosterLoot(3, inventory));
console.log(inventory);
console.log(getBoosterLoot(4, inventory));
console.log(inventory);
console.log(getBoosterLoot(5, inventory));
console.log(inventory);
console.log(getBoosterLoot(6, inventory));
console.log(inventory);
console.log(getBoosterLoot(7, inventory));
console.log(inventory);
console.log(getBoosterLoot(8, inventory));
console.log(inventory);

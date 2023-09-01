// Редкость
enum RARITY {
    COMMON,
    RARE,
    EPIC,
    LEGENDARY
}

// Тип предмета
enum ITEMTYPE {
    HELMET,
    WEAPON,
    SHIELD,
    ARMOR
}

// Настройки предмета
interface IItemSettings {
    
    name: string;
    rarity: RARITY;
    itemType: ITEMTYPE;
}

// Класс предмета
class Item {
    name: string;
    rarity: RARITY;
    itemType: ITEMTYPE;

    constructor(settings: IItemSettings) {
        this.name = settings.name;
        this.rarity = settings.rarity;
        this.itemType = settings.itemType;
    }
}
// Интерфейс itembase
interface IItemBase {
    [ID: number]: Item
}
// База предметов, ключ - ID предмета.
let itemsBase: IItemBase = {
    1: new Item({name: 'COMMON HELMET 1', rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET}),
    2: new Item({name: 'COMMON HELMET 2', rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET}),
    3: new Item({name: 'RARE HELMET 1', rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET}),
    4: new Item({name: 'RARE HELMET 2', rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET}),
    5: new Item({name: 'EPIC HELMET 1', rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET}),
    6: new Item({name: 'EPIC HELMET 2', rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET}),
    7: new Item({name: 'LEGENDARY HELMET 1', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET}),
    8: new Item({name: 'LEGENDARY HELMET 2', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET}),
    9: new Item({name: 'COMMON WEAPON 1', rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON}),
    10: new Item({name: 'COMMON WEAPON 2', rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON}),
    11: new Item({name: 'RARE WEAPON 1', rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON}),
    12: new Item({name: 'RARE WEAPON 2', rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON}),
    13: new Item({name: 'EPIC WEAPON 1', rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON}),
    14: new Item({name: 'EPIC WEAPON 2', rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON}),
    15: new Item({name: 'LEGENDARY WEAPON 1', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON}),
    16: new Item({name: 'LEGENDARY WEAPON 2', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON}),
    17: new Item({name: 'COMMON SHIELD 1', rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD}),
    18: new Item({name: 'COMMON SHIELD 2', rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD}),
    19: new Item({name: 'RARE SHIELD 1', rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD}),
    20: new Item({name: 'RARE SHIELD 2', rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD}),
    21: new Item({name: 'EPIC SHIELD 1', rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD}),
    22: new Item({name: 'EPIC SHIELD 2', rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD}),
    23: new Item({name: 'LEGENDARY SHIELD 1', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD}),
    24: new Item({name: 'LEGENDARY SHIELD 2', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD}),
    25: new Item({name: 'COMMON ARMOR 1', rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR}),
    26: new Item({name: 'COMMON ARMOR 2', rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR}),
    27: new Item({name: 'RARE ARMOR 1', rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR}),
    28: new Item({name: 'RARE ARMOR 2', rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR}),
    29: new Item({name: 'EPIC ARMOR 1', rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR}),
    30: new Item({name: 'EPIC ARMOR 2', rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR}),
    31: new Item({name: 'LEGENDARY ARMOR 1', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR}),
    32: new Item({name: 'LEGENDARY ARMOR 2', rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR}),
     // пример добавления экземпляра предмета
};

// Генерируем предметы

let generateItemsBase = (() => {
    let currentID = 2;
    for (const itemType in ITEMTYPE) {
        if(typeof itemType ==='string'){
            continue
        }
        for (const rarity in RARITY) {
            if(typeof rarity ==='string'){
                continue
            }
            for (let i = 0; i < 2; i++) {
                const itemName = `${rarity} ${itemType} ${i + 1}`;
                const itemSettings: IItemSettings = {
                    name: itemName,
                    rarity: rarity,
                    itemType: itemType
                };
                itemsBase[currentID] = new Item(itemSettings);
                currentID++;
            }
        }
    }
})
// Интерфейс инвентаря. Ключ - ID предмета, значение - количество экземпляров этого предмета
//в инвентаре

interface IInventory {
    [key: number]: number
}

// Настройки простого бустерпака
interface IBoosterSettings {
    rarityDestribution: {rarity: RARITY, count: number}[]
}

// Интерфейс для передачи отдельно item и индексов
interface IItemData {
    items: Item[],
    Ids: number[]
}

// Класс простого бустерпака
class Booster {
    rarityDestribution: {rarity: RARITY, count: number}[];
    constructor(settings: IBoosterSettings) {
        this.rarityDestribution = settings.rarityDestribution;
    }
    getSpecificItems(rarity: RARITY, itemType?: ITEMTYPE): IItemData {
        const possibleItems: Item[] = []
        const IDsList: number[] = []
        for (let i in itemsBase){
            if(itemType !== undefined){
                if(itemsBase[i].rarity == rarity && itemsBase[i].itemType == itemType){
                    
                    possibleItems.push(itemsBase[i])
                    IDsList.push(+i)
                }
            }else{
                if(itemsBase[i].rarity == rarity){
                    possibleItems.push(itemsBase[i])
                    IDsList.push(+i)
                } 
            }
        }
        return {items:possibleItems, Ids: IDsList}
    }

    
    addToInventorhy(playerInventory: IInventory, ID: number): void { 
        if(playerInventory[+ID]){
            playerInventory[+ID]++

        }else{
            playerInventory[+ID] = 1
        }
    }

    pickRandomItem(possibleItems: Item[], IDsList: number[]):{item:Item, id:number}{
        let idx = Math.floor(Math.random() * possibleItems.length)
        const randomItem = possibleItems[idx]  
        return {item:randomItem,id:IDsList[idx]} 
    }

    defineLoot():IItemData {
        let loot:Item[] = []
        
        const lootIndexs: number[] = []
        for(let rarityEntry of this.rarityDestribution){
            
            for(let i = 0; i < rarityEntry.count; i++){
                
                const itemRarity = rarityEntry.rarity;
                const possibleItemsData = this.getSpecificItems(itemRarity)
                const possibleItems = possibleItemsData.items
                const IDsList = possibleItemsData.Ids
                const randomResult = this.pickRandomItem(possibleItems, IDsList)
                lootIndexs.push(randomResult.id)
                loot.push(randomResult.item)
                }
            }
        const lootData: IItemData = {items: loot, Ids: lootIndexs}
        return lootData
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
        let loot:IItemData = this.defineLoot()
        for(let item of loot.Ids){
            this.addToInventorhy(playerInventory, +item) 
        }
        
        return loot.items
    }
}

// Настройки бустерпака удачи
interface ILuckBoosterSettings extends IBoosterSettings {
    increaceChance: number;
}

// Класс бустерпака удачи
class LuckBooster extends Booster {
    increaceChance: number;
    constructor(settings: ILuckBoosterSettings) {
        super(settings)
        this.increaceChance = settings.increaceChance
    }

    getIncreaceRarityChance():number{
        return Math.floor(Math.log(Math.random())/Math.log(this.increaceChance
            * Math.pow(10, -2))) 
    }

    

    getLuckUpgrades(loot: IItemData): IItemData{
        const lootIndexs: number[] = [];
        
        const upgradedItems: Item[] = [];
      
        for(let i in loot.items){
            
            const upgradeStep = this.getIncreaceRarityChance()
            if(!upgradeStep){
                upgradedItems.push(loot.items[i]);
                lootIndexs.push(loot.Ids[i]);
                continue
            } 

            let currentRarity = loot.items[i].rarity
            let upgradedRarity: number = 0
            if(currentRarity + upgradeStep <= RARITY.LEGENDARY){
                upgradedRarity = currentRarity + upgradeStep;
               
            } else {
                upgradedRarity = currentRarity;
            }
            
            const possibleItemsData = this.getSpecificItems(upgradedRarity,
                 loot.items[i].itemType)
            const possibleItems = possibleItemsData.items;
            const IDsList = possibleItemsData.Ids;
            const randomResult = super.pickRandomItem(possibleItems, IDsList);
            lootIndexs.push(randomResult.id);
            upgradedItems.push(randomResult.item);
            
        }
        const lootData: IItemData = {items: upgradedItems, Ids: lootIndexs}
        return lootData;
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
        const loot = super.defineLoot();
        const upgradedLoot = this.getLuckUpgrades(loot);
        for(let item of upgradedLoot.Ids){
            this.addToInventorhy(playerInventory, +item) ;
        }
        return upgradedLoot.items; 
    }
}


interface UniformBoosterSettings extends ILuckBoosterSettings {}

class UniformBooster extends LuckBooster {
    constructor(settings: UniformBoosterSettings) {
        super(settings)
    }

    getUniformItems(f?:Function):IItemData{
        const itemsTotal = this.rarityDestribution[0].count + this.rarityDestribution[1].count;
        
        const lootIndexs: number[] = [];
        
        const items: Item[] = [];
        if (itemsTotal < 4){
            throw new Error("Must have at least 4 items")
        }
        const typesCount = Object.keys(ITEMTYPE).length / 2
        let uniformItemsLeft = typesCount;
        let typesList:number[] = []
        for (let i = 0; i < typesCount; i ++){
            typesList.push(i)
        }
        for(let rarityEntry of this.rarityDestribution){
            
            for(let i = 0; i < rarityEntry.count; i++){
                if (uniformItemsLeft > 0) {
                    
                    const typesListIndex = Math.floor(Math.random() * uniformItemsLeft) 
                    
                    const itemType = typesList[typesListIndex]
                    uniformItemsLeft--
                    
                    typesList.splice(typesListIndex, 1)
                    const possibleItemsData = super.getSpecificItems(rarityEntry.rarity, itemType)
                    
                    const possibleItems = possibleItemsData.items;
                    const IDsList = possibleItemsData.Ids;
                    const randomResult = super.pickRandomItem(possibleItems, IDsList);
                    
                    lootIndexs.push(randomResult.id);
                    items.push(randomResult.item);

                }else {
                    const possibleItemsData = super.getSpecificItems(rarityEntry.rarity)
                    
                    const possibleItems = possibleItemsData.items;
                    const IDsList = possibleItemsData.Ids;
                    const randomResult = super.pickRandomItem(possibleItems, IDsList);
                    
                    lootIndexs.push(randomResult.id);
                    items.push(randomResult.item);

                }
                
            }
        }
        return {items:items, Ids: lootIndexs}
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
        const loot = this.getUniformItems()

        const upgradedLoot = super.getLuckUpgrades(loot)
        for(let item of upgradedLoot.Ids){
            this.addToInventorhy(playerInventory, +item) ;
        }

        
        return upgradedLoot.items
    }
}

interface CollectionBoosterSettings extends UniformBoosterSettings{}

class CollectionBooster extends UniformBooster {
    constructor(settings: UniformBoosterSettings) {
        super(settings)
    }

    pickInverselyProportional(possibleItems: Item[], IDsList: number[],
         inventory: IInventory): {item:Item, id: number} {
        const probabilities: number[] = IDsList.map(item => 1 / (inventory[item] || 1));
        console.log(probabilities)
        // Нормализуем вероятности так, чтобы их сумма была равна 1
        const totalProbability = probabilities.reduce((sum, prob) => sum + prob, 0);
        console.log(totalProbability)
        const normalizedProbabilities = probabilities.map(prob => prob / totalProbability);
        console.log(normalizedProbabilities)
        const random = Math.random()
        console.log(random)
        let probSum = 0
        for(let i = 0; i < normalizedProbabilities.length; i++){
            probSum = probSum + normalizedProbabilities[i]
            if(random <= probSum){
            return { item: possibleItems[i],id:IDsList[i] }
            }
        }
    }
    getCollectionItems():IItemData{
        const itemsTotal = this.rarityDestribution[0].count + this.rarityDestribution[1].count;
        
        const lootIndexs: number[] = [];
        
        const items: Item[] = [];
        if (itemsTotal < 4){
            throw new Error("Must have at least 4 items")
        }
        const typesCount = Object.keys(ITEMTYPE).length / 2
        let uniformItemsLeft = typesCount;
        let typesList:number[] = []
        for (let i = 0; i < typesCount; i ++){
            typesList.push(i)
        }
        for(let rarityEntry of this.rarityDestribution){
            for(let i = 0; i < rarityEntry.count; i++){
                if (uniformItemsLeft > 0) {
                    const typesListIndex = Math.floor(Math.random() * uniformItemsLeft) 
                    const itemType = typesList[typesListIndex]
                    uniformItemsLeft--
                    
                    typesList.splice(typesListIndex, 1)
                    const possibleItemsData = super.getSpecificItems(rarityEntry.rarity, itemType)
                    
                    const possibleItems = possibleItemsData.items;
                    const IDsList = possibleItemsData.Ids;
                    const randomResult = this.pickInverselyProportional(possibleItems, IDsList, inventory);
                    
                    lootIndexs.push(randomResult.id);
                    items.push(randomResult.item);

                } else {
                    const possibleItemsData = super.getSpecificItems(rarityEntry.rarity)
                    
                    const possibleItems = possibleItemsData.items;
                    const IDsList = possibleItemsData.Ids;
                    const randomResult = this.pickInverselyProportional(possibleItems, IDsList, inventory)
                    
                    lootIndexs.push(randomResult.id);
                    items.push(randomResult.item);

                }
                
            }
        }
        return {items:items, Ids: lootIndexs}
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
        const loot = this.getCollectionItems()
        const upgradedLoot = super.getLuckUpgrades(loot)
        for(let item of upgradedLoot.Ids){
            this.addToInventorhy(playerInventory, +item) ;
        }
        return upgradedLoot.items
        
    }
}


// коллекция экземпляров бустерпаков, ключ - ID бустерпака
let boostersBase: {[ID: number]: Booster} = {
    1: new Booster({rarityDestribution:[
        { rarity: RARITY.RARE, count: 3 },
        { rarity: RARITY.COMMON, count: 2 }]
    }), 
    2: new Booster({rarityDestribution:[
        { rarity: RARITY.LEGENDARY, count: 1 },
        { rarity: RARITY.EPIC, count: 3 }
    
    ]}),
    3: new LuckBooster({rarityDestribution:[
        { rarity: RARITY.RARE, count: 3 },
        { rarity: RARITY.COMMON, count: 2 }],
        increaceChance: 10
    }), 
    4: new LuckBooster({rarityDestribution:[
        { rarity: RARITY.LEGENDARY, count: 1 },
        { rarity: RARITY.EPIC, count: 3 }],
        increaceChance: 45
    }), 
    5: new UniformBooster({rarityDestribution:[
        { rarity: RARITY.RARE, count: 3 },
        { rarity: RARITY.COMMON, count: 2 }],
        increaceChance: 10
    }),

    6: new UniformBooster({rarityDestribution:[
        { rarity: RARITY.LEGENDARY, count: 1 },
        { rarity: RARITY.EPIC, count: 3 }],
        increaceChance: 45
    }),

    7: new CollectionBooster({rarityDestribution:[
        { rarity: RARITY.RARE, count: 3 },
        { rarity: RARITY.COMMON, count: 2 }],
        increaceChance: 10
    }),
    8: new CollectionBooster({rarityDestribution:[
        { rarity: RARITY.LEGENDARY, count: 1 },
        { rarity: RARITY.EPIC, count: 3 }],
        increaceChance: 45
    }),

};

// API
// функция открытия бустерпака
function getBoosterLoot(boosterID: number, playerInventory: IInventory): Item[] {
    return boostersBase[boosterID].getBoosterLoot(playerInventory);
}



// TEST
let inventory:IInventory = {};

console.log(getBoosterLoot(1, inventory))
console.log(inventory)
console.log(getBoosterLoot(2, inventory))
console.log(inventory)
console.log(getBoosterLoot(3, inventory))
console.log(inventory)
console.log(getBoosterLoot(4, inventory))
console.log(inventory)
console.log(getBoosterLoot(5, inventory))
console.log(inventory)
console.log(getBoosterLoot(6, inventory))
console.log(inventory)
console.log(getBoosterLoot(7, inventory))
console.log(inventory)
console.log(getBoosterLoot(8, inventory))
console.log(inventory)
import { ITEMTYPE, RARITY } from "./src/types";
import { itemsBase } from "./src/itemsBase";
import { IItemSettings, IInventory } from "./src/interfaces";
import { Item } from "./src/Item";
import { boostersBase } from "./src/boostersbase";

// Функция для генерации предметов
let generateItemsBase = () => {
  let currentID = 1;
  for (const itemType in ITEMTYPE) {
    if (typeof itemType === "string") {
      continue;
    }
    for (const rarity in RARITY) {
      if (typeof rarity === "string") {
        continue;
      }
      for (let i = 0; i < 2; i++) {
        const itemName = `${rarity} ${itemType} ${i + 1}`;
        const itemSettings: IItemSettings = {
          name: itemName,
          rarity: rarity,
          itemType: itemType,
        };
        itemsBase[currentID] = new Item(itemSettings);
        currentID++;
      }
    }
  }
};

// API
// функция открытия бустерпака
function getBoosterLoot(
  boosterID: number,
  playerInventory: IInventory
): Item[] {
  return boostersBase[boosterID].getBoosterLoot(playerInventory);
}

// TEST

let inventory: IInventory = {};
for (let i in boostersBase) {
  console.log("Booster " + i )
  console.log(getBoosterLoot(+i, inventory));
  console.log('\n')
  console.log("Inventory")
  console.log(inventory);
  console.log('--------------------------------\n\n')
}



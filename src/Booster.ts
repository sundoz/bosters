import { RARITY, ITEMTYPE } from "./types";
import { IBoosterSettings, IItemData, IInventory } from "./interfaces";
import { itemsBase } from "./itemsBase";
import { Item } from "./Item";
import { getRandInt } from "./utils";

export class Booster {
  rarityDestribution: { rarity: RARITY; count: number }[];

  constructor(settings: IBoosterSettings) {
    this.rarityDestribution = settings.rarityDestribution;
  }

  protected getSpecificItems(rarity: RARITY, itemType: ITEMTYPE): IItemData[] {
    const possibleItems: IItemData[] = [];

    for (let i in itemsBase) {
      if (
        itemsBase[i].rarity == rarity &&
        (itemType === undefined || itemsBase[i].itemType == itemType)
      ) {
        possibleItems.push({ item: itemsBase[i], id: +i });
      }
    }
    return possibleItems;
  }

  protected addToInventorhy(playerInventory: IInventory, id: number): void {
    playerInventory[id] = playerInventory[id] ? playerInventory[+id] + 1 : 1;
  }

  protected pickRandomItem(rarity: RARITY, itemType?: ITEMTYPE): IItemData {
    const possibleItems = this.getSpecificItems(rarity, itemType);

    let idx = getRandInt(possibleItems.length);
    return possibleItems[idx];
  }

  protected defineLoot(): IItemData[] {
    let loot: IItemData[] = [];

    for (let rarityEntry of this.rarityDestribution) {
      for (let i = 0; i < rarityEntry.count; i++) {
        const randomResult = this.pickRandomItem(rarityEntry.rarity);
        loot.push(randomResult);
      }
    }
    return loot;
  }

  public getBoosterLoot(playerInventory: IInventory): Item[] {
    let loot: IItemData[] = this.defineLoot();
    for (let item of loot) {
      this.addToInventorhy(playerInventory, +item.id);
    }
    return loot.map((item) => item.item);
  }
}

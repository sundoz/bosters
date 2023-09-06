import { LuckBooster } from "./LuckBooster";
import { IUniformBoosterSettings, IItemData, IInventory } from "./interfaces";
import { RARITY, ITEMTYPE } from "./types";
import { getRandInt } from "./utils";

export class UniformBooster extends LuckBooster {
  constructor(settings: IUniformBoosterSettings) {
    super(settings);
  }

  protected defineBaseLoot(
    pickItem: (rarity: RARITY, itemType: ITEMTYPE) => IItemData): IItemData[] {
    const itemsTotal =
      this.rarityDestribution[0].count + this.rarityDestribution[1].count;
    if (itemsTotal < 4) {
      throw new Error("Must have at least 4 items");
    }
    const loot: IItemData[] = []; 
    const typesCount = Object.keys(ITEMTYPE).length / 2;
    let uniformItemsLeft = typesCount;
    let typesList: number[] = [...Array(typesCount).keys()]
    for (let rarityEntry of this.rarityDestribution) {
      for (let i = 0; i < rarityEntry.count; i++) {
        let itemType = undefined;
        if (uniformItemsLeft > 0) {
          const typesListIndex = getRandInt(uniformItemsLeft); 
          itemType = typesList[typesListIndex];
          uniformItemsLeft--;
          typesList.splice(typesListIndex, 1);
        }
        const randomResult = pickItem(rarityEntry.rarity, itemType); 
        loot.push(randomResult);
      }
    }
    return loot;
  }

  protected defineLoot(): IItemData[] {
    const loot = this.defineBaseLoot(this.pickRandomItem.bind(this));
    const upgradedLoot = super.getLootWithUpgradedRarity(loot);
    return upgradedLoot;
  }
}

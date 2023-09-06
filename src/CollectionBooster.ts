import { UniformBooster } from "./UniformBooster";
import { IUniformBoosterSettings, IInventory, IItemData } from "./interfaces";
import { RARITY, ITEMTYPE } from "./types";
import { Item } from "./Item";

// Класс коллекционного бустера
export class CollectionBooster extends UniformBooster {
  constructor(settings: IUniformBoosterSettings) {
    super(settings);
  }
  // Определяем предметы обратно пропорционально их количеству в рюкзаке
  private pickInverselyProportional(
    possibleLoot: IItemData[],
    inventory: IInventory
  ): IItemData {
    const probabilities: number[] = possibleLoot.map(
      (item) => 1 / (inventory[item.id] || 1)
    );
    // Нормализуем вероятности так, чтобы их сумма была равна 1
    const totalProbability = probabilities.reduce((sum, prob) => sum + prob, 0);
    const normalizedProbabilities = probabilities.map(
      (prob) => prob / totalProbability
    );
    const random = Math.random();
    let probSum = 0;
    for (let i = 0; i < normalizedProbabilities.length; i++) {
      probSum = probSum + normalizedProbabilities[i];
      if (random <= probSum) {
        return possibleLoot[i];
      }
    }
  }
  
  getPickCollectionItemFunction(inventory: IInventory) {
    return (rarity: RARITY, itemType: ITEMTYPE): IItemData => {
      return this.pickInverselyProportional(
        super.getSpecificItems(rarity, itemType),
        inventory
      );
    };
  }
  
  defineLootForCollection(inventory: IInventory): IItemData[] {
    const loot = super.defineBaseLoot(
      this.getPickCollectionItemFunction(inventory)
    );
    const upgradedLoot = super.getLootWithUpgradedRarity(loot);
    return upgradedLoot;
  }

  getBoosterLoot(playerInventory: IInventory): Item[] {
    const loot = this.defineLootForCollection(playerInventory);
    for (let item of loot) {
      this.addToInventorhy(playerInventory, +item.id);
    }
    return loot.map((item) => item.item);
  }
}

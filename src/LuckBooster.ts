import { Booster } from "./Booster";
import { ILuckBoosterSettings, IItemData } from "./interfaces";
import { RARITY } from "./types";




// Класс для luckbooster
export class LuckBooster extends Booster {
  increaceChance: number;

  constructor(settings: ILuckBoosterSettings) {
    super(settings);
    this.increaceChance = settings.increaceChance;
  }

  protected getIncreaceRarityChance(): number {
    // Изменено основание логорифма по формуле согласно https://en.wikipedia.org/wiki/Logarithm#Change_of_base
    // Формула уменьшения вероятности получилась логорифмическая с основанием вероятности увеличения редкости 
    
    let x = Math.log(Math.random());
    let b = Math.log(this.increaceChance * 0.01);
    return Math.floor(x / b);
  }
  // Maybe do it inplace?
  protected getLootWithUpgradedRarity(loot: IItemData[]): IItemData[] {
    const upgradedItems: IItemData[] = [];

    for (let i in loot) {
      const nUpgradesToPerform = this.getIncreaceRarityChance(); //
      if (nUpgradesToPerform == 0) {
        upgradedItems.push(loot[i]);
        continue;
      }
      let currentRarity = loot[i].item.rarity;
      let upgradedRarity: number = 0;
      upgradedRarity =
        currentRarity + nUpgradesToPerform <= RARITY.LEGENDARY
          ? currentRarity + nUpgradesToPerform
          : RARITY.LEGENDARY;
      const randomResult = super.pickRandomItem(
        upgradedRarity,
        loot[i].item.itemType
      ); 
      upgradedItems.push(randomResult);
    }
    return upgradedItems;
  }

  protected defineLoot(): IItemData[] {
    const loot = super.defineLoot();
    const upgradedLoot = this.getLootWithUpgradedRarity(loot);
    return upgradedLoot;
  }
}

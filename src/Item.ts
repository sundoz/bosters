import { RARITY, ITEMTYPE } from "./types";
import { IItemSettings } from "./interfaces";

// Класс предмета
export class Item {
  name: string;
  rarity: RARITY;
  itemType: ITEMTYPE;

  constructor(settings: IItemSettings) {
    this.name = settings.name;
    this.rarity = settings.rarity;
    this.itemType = settings.itemType;
  }
}

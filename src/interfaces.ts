import { RARITY, ITEMTYPE } from "./types";
import { Item } from "./Item";

// Настройки предмета
export interface IItemSettings {
  name: string;
  rarity: RARITY;
  itemType: ITEMTYPE;
}

// Интерфейс itembase
export interface IItemBase {
  [ID: number]: Item;
}

// Интерфейс настроек Booster
export interface IBoosterSettings {
  rarityDestribution: { rarity: RARITY; count: number }[];
}

// Интерфейс для обработки данных
export interface IItemData {
  item: Item;
  id: number;
}

// Интерфейс инвентаря. Ключ - ID предмета, значение - количество экземпляров этого предмета
//в инвентаре
export interface IInventory {
  [key: number]: number;
}

// Интерфейс LuckBooster
export interface ILuckBoosterSettings extends IBoosterSettings {
  increaceChance: number;
}

// Интерфейс UniformBooster
export interface IUniformBoosterSettings extends ILuckBoosterSettings {}

// Интерфейс CollectionBoster
export interface ICollectionBoosterSettings extends IUniformBoosterSettings {}

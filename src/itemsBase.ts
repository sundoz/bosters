import { RARITY, ITEMTYPE } from "./types";
import { IItemBase } from "./interfaces";
import { Item } from "./Item";
// База предметов, ключ - ID предмета.

export let itemsBase: IItemBase = {
  1: new Item({
    name: "COMMON HELMET 1",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.HELMET,
  }),
  2: new Item({
    name: "COMMON HELMET 2",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.HELMET,
  }),
  3: new Item({
    name: "RARE HELMET 1",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.HELMET,
  }),
  4: new Item({
    name: "RARE HELMET 2",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.HELMET,
  }),
  5: new Item({
    name: "EPIC HELMET 1",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.HELMET,
  }),
  6: new Item({
    name: "EPIC HELMET 2",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.HELMET,
  }),
  7: new Item({
    name: "LEGENDARY HELMET 1",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.HELMET,
  }),
  8: new Item({
    name: "LEGENDARY HELMET 2",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.HELMET,
  }),
  9: new Item({
    name: "COMMON WEAPON 1",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.WEAPON,
  }),
  10: new Item({
    name: "COMMON WEAPON 2",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.WEAPON,
  }),
  11: new Item({
    name: "RARE WEAPON 1",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.WEAPON,
  }),
  12: new Item({
    name: "RARE WEAPON 2",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.WEAPON,
  }),
  13: new Item({
    name: "EPIC WEAPON 1",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.WEAPON,
  }),
  14: new Item({
    name: "EPIC WEAPON 2",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.WEAPON,
  }),
  15: new Item({
    name: "LEGENDARY WEAPON 1",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.WEAPON,
  }),
  16: new Item({
    name: "LEGENDARY WEAPON 2",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.WEAPON,
  }),
  17: new Item({
    name: "COMMON SHIELD 1",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.SHIELD,
  }),
  18: new Item({
    name: "COMMON SHIELD 2",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.SHIELD,
  }),
  19: new Item({
    name: "RARE SHIELD 1",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.SHIELD,
  }),
  20: new Item({
    name: "RARE SHIELD 2",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.SHIELD,
  }),
  21: new Item({
    name: "EPIC SHIELD 1",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.SHIELD,
  }),
  22: new Item({
    name: "EPIC SHIELD 2",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.SHIELD,
  }),
  23: new Item({
    name: "LEGENDARY SHIELD 1",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.SHIELD,
  }),
  24: new Item({
    name: "LEGENDARY SHIELD 2",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.SHIELD,
  }),
  25: new Item({
    name: "COMMON ARMOR 1",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.ARMOR,
  }),
  26: new Item({
    name: "COMMON ARMOR 2",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.ARMOR,
  }),
  27: new Item({
    name: "RARE ARMOR 1",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.ARMOR,
  }),
  28: new Item({
    name: "RARE ARMOR 2",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.ARMOR,
  }),
  29: new Item({
    name: "EPIC ARMOR 1",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.ARMOR,
  }),
  30: new Item({
    name: "EPIC ARMOR 2",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.ARMOR,
  }),
  31: new Item({
    name: "LEGENDARY ARMOR 1",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.ARMOR,
  }),
  32: new Item({
    name: "LEGENDARY ARMOR 2",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.ARMOR,
  }),
  // пример добавления экземпляра предмета
};

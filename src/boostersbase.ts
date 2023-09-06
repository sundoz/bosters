import { RARITY } from "./types";
import { Booster } from "./Booster";
import { LuckBooster } from "./LuckBooster";
import { UniformBooster } from "./UniformBooster";
import { CollectionBooster } from "./CollectionBooster";

export let boostersBase: { [ID: number]: Booster } = {
  1: new Booster({
    rarityDestribution: [
      { rarity: RARITY.RARE, count: 3 },
      { rarity: RARITY.COMMON, count: 2 },
    ],
  }),
  2: new Booster({
    rarityDestribution: [
      { rarity: RARITY.LEGENDARY, count: 1 },
      { rarity: RARITY.EPIC, count: 3 },
    ],
  }),
  3: new LuckBooster({
    rarityDestribution: [
      { rarity: RARITY.RARE, count: 3 },
      { rarity: RARITY.COMMON, count: 2 },
    ],
    increaceChance: 10,
  }),
  4: new LuckBooster({
    rarityDestribution: [
      { rarity: RARITY.LEGENDARY, count: 1 },
      { rarity: RARITY.EPIC, count: 3 },
    ],
    increaceChance: 45,
  }),
  5: new UniformBooster({
    rarityDestribution: [
      { rarity: RARITY.RARE, count: 3 },
      { rarity: RARITY.COMMON, count: 2 },
    ],
    increaceChance: 10,
  }),

  6: new UniformBooster({
    rarityDestribution: [
      { rarity: RARITY.LEGENDARY, count: 1 },
      { rarity: RARITY.EPIC, count: 3 },
    ],
    increaceChance: 45,
  }),

  7: new CollectionBooster({
    rarityDestribution: [
      { rarity: RARITY.RARE, count: 3 },
      { rarity: RARITY.COMMON, count: 2 },
    ],
    increaceChance: 10,
  }),
  8: new CollectionBooster({
    rarityDestribution: [
      { rarity: RARITY.LEGENDARY, count: 1 },
      { rarity: RARITY.EPIC, count: 3 },
    ],
    increaceChance: 45,
  }),
};

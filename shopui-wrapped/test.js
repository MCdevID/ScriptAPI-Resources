import { system } from "@minecraft/server";
import { ShopUI } from "./index.js";

system.afterEvents.scriptEventReceive.subscribe((ev)=>{
  if (ev.id === "test:shop") return new ShopUI(
    'SHOPUI-N',
    [
      [
        'Tools',
        [
          [
            'stick',
            {
              item: 'minecraft:stick',
              max: 64,
              price: 84,
              stock: 128,
            },
          ],
          [
            'coal',
            {
              item: 'minecraft:coal',
              max: 64,
              price: 150,
              stock: 64,
            },
          ],
          [
            'ender pearl',
            {
              item: 'minecraft:ender_pearl',
              max: 16,
              price: 200,
              stock: 32,
            },
          ],
        ],
      ],
      [
        'golden apple',
        {
          item: 'minecraft:golden_apple',
          max: 64,
          price: 8000,
          stock: 200,
        },
        'textures/items/gold_apple',
      ],
    ],
    source,
  );
})

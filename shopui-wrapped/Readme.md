## **ShopUI - Minecraft Bedrock UI Shop System**  

**ShopUI** Create Your ShopUI using this Extension.

---

#### **Shop Structure Format**
```javascript
[
  ["Category Name", [
    ["Item Name", { item: "minecraft:item_id", price: number, stock: number, max: number },"Texture Path (optional)"]
  ],"Texture Path (optional)"]
]

```

| Property  | Type    | Description |
|-----------|--------|-------------|
| `item`    | string | Minecraft item ID. |
| `price`   | number | Price per item. |
| `stock`   | number | Available stock. |
| `max`     | number | Maximum purchase per transaction. |

---

This system provides a simple but flexible way to create a shop UI in Minecraft Bedrock.

---

### Creator
- [@Nperma](https://github.com/nperma)

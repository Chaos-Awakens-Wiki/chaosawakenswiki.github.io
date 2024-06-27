document.addEventListener("DOMContentLoaded", function() {
	let htmlContent = document.body.innerHTML;

	const title = document.querySelector("title").innerText;
	const newName = title.replace(" | Chaos Awakens Wiki", "");
	htmlContent = htmlContent.replace(/\${name}/g, newName);

	let newToolLevel;
	if (parent.tool_level || parent.tool_level === 0) {
		if (parent.tool_type) {
			const tool_type = parent.tool_type;
			const tool_level = parent.tool_level;
			switch (tool_type) {
				case "pickaxe":
					switch (tool_level) {
						case 0:
							newToolLevel = `<span class="sprite inv-sprite" title="A wooden pickaxe, crystalwood pickaxe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Wooden_Pickaxe.png,../images/items/Crystal_Wood_Pickaxe.png" style="background: url(https://minecraft.wiki/images/Invicon_Wood_Pickaxe.png); background-size: 32px 32px;">`
							break;
						case 1:
							newToolLevel = `<span class="sprite inv-sprite" title="A stone pickaxe, kyanite pickaxe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Stone_Pickaxe.png,../images/items/Kyanite_Pickaxe.png" style="background: url(https://minecraft.wiki/images/Invicon_Stone_Pickaxe.png); background-size: 32px 32px;">`
							break;
						case 2:
							newToolLevel = `<span class="sprite inv-sprite" title="An iron pickaxe, pink tourmaline pickaxe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Iron_Pickaxe.png,../images/items/Pink_Tourmaline_Pickaxe.png" style="background: url(https://minecraft.wiki/images/Invicon_Iron_Pickaxe.png); background-size: 32px 32px;">`
							break;
						case 3:
							newToolLevel = `<span class="sprite inv-sprite" title="A diamond pickaxe, emerald pickaxe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Diamond_Pickaxe.png,../images/items/Emerald_Pickaxe.png" style="background: url(https://minecraft.wiki/images/Invicon_Diamond_Pickaxe.png); background-size: 32px 32px;">`
							break;
						case 4:
							newToolLevel = `<span class="sprite inv-sprite" title="An amethyst pickaxe, tiger's eye pickaxe or better is required to mine this block" data-images="../images/items/Amethyst_Pickaxe.png,../images/items/Tigers_Eye_Pickaxe.png" style="background: url(../images/items/Amethyst_Pickaxe.png); background-size: 32px 32px;">`
							break;
						case 5:
							newToolLevel = `<span class="sprite inv-sprite" title="A ruby pickaxe, platinum pickaxe or better is required to mine this block" data-images="../images/items/Ruby_Pickaxe.png,../images/items/Platinum_Pickaxe.png" style="background: url(../images/items/Ruby_Pickaxe.png); background-size: 32px 32px;">`
							break;
						case 6:
							newToolLevel = `<span class="sprite inv-sprite" title="An ultimate pickaxe or better is required to mine this block" style="background: url(../images/items/The_Ultimate_Pickaxe.png); background-size: 32px 32px;">`
							break;
						default:
							newToolLevel = `undefined`

					}
					break;
				case "axe":
					switch (tool_level) {
						case 0:
							newToolLevel = `<span class="sprite inv-sprite" title="A wooden axe, crystalwood axe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Wooden_Axe.png,../images/items/Crystal_Wood_Axe.png" style="background: url(https://minecraft.wiki/images/Invicon_Wood_Axe.png); background-size: 32px 32px;">`
							break;
						case 1:
							newToolLevel = `<span class="sprite inv-sprite" title="A stone axe, kyanite axe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Stone_Axe.png,../images/items/Kyanite_Axe.png" style="background: url(https://minecraft.wiki/images/Invicon_Stone_Axe.png); background-size: 32px 32px;">`
							break;
						case 2:
							newToolLevel = `<span class="sprite inv-sprite" title="An iron axe, pink tourmaline axe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Iron_Axe.png,../images/items/Pink_Tourmaline_Axe.png" style="background: url(https://minecraft.wiki/images/Invicon_Iron_Axe.png); background-size: 32px 32px;">`
							break;
						case 3:
							newToolLevel = `<span class="sprite inv-sprite" title="A diamond axe, emerald axe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Diamond_Axe.png,../images/items/Emerald_Axe.png" style="background: url(https://minecraft.wiki/images/Invicon_Diamond_Axe.png); background-size: 32px 32px;">`
							break;
						case 4:
							newToolLevel = `<span class="sprite inv-sprite" title="An amethyst axe, tiger's eye axe or better is required to mine this block" data-images="../images/items/Amethyst_Axe.png,../images/items/Tigers_Eye_Axe.png" style="background: url(../images/items/Amethyst_Axe.png); background-size: 32px 32px;">`
							break;
						case 5:
							newToolLevel = `<span class="sprite inv-sprite" title="A ruby axe, platinum axe or better is required to mine this block" data-images="../images/items/Ruby_Axe.png,../images/items/Platinum_Axe.png" style="background: url(../images/items/Ruby_Axe.png); background-size: 32px 32px;">`
							break;
						case 6:
							newToolLevel = `<span class="sprite inv-sprite" title="An ultimate axe or better is required to mine this block" style="background: url(../images/items/The_Ultimate_Axe.png); background-size: 32px 32px;">`
							break;
						default:
							newToolLevel = `undefined`

					}
					break;
				case "shovel":
					switch (tool_level) {
						case 0:
							newToolLevel = `<span class="sprite inv-sprite" title="A wooden shovel, crystalwood shovel or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Wooden_Shovel.png,../images/items/Crystal_Wood_Shovel.png" style="background: url(https://minecraft.wiki/images/Invicon_Wood_Shovel.png); background-size: 32px 32px;">`
							break;
						case 1:
							newToolLevel = `<span class="sprite inv-sprite" title="A stone shovel, kyanite shovel or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Stone_Shovel.png,../images/items/Kyanite_Shovel.png" style="background: url(https://minecraft.wiki/images/Invicon_Stone_Shovel.png); background-size: 32px 32px;">`
							break;
						case 2:
							newToolLevel = `<span class="sprite inv-sprite" title="An iron shovel, pink tourmaline shovel or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Iron_Shovel.png,../images/items/Pink_Tourmaline_Shovel.png" style="background: url(https://minecraft.wiki/images/Invicon_Iron_Shovel.png); background-size: 32px 32px;">`
							break;
						case 3:
							newToolLevel = `<span class="sprite inv-sprite" title="A diamond shovel, emerald shovel or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Diamond_Shovel.png,../images/items/Emerald_Shovel.png" style="background: url(https://minecraft.wiki/images/Invicon_Diamond_Shovel.png); background-size: 32px 32px;">`
							break;
						case 4:
							newToolLevel = `<span class="sprite inv-sprite" title="An amethyst shovel, tiger's eye shovel or better is required to mine this block" data-images="../images/items/Amethyst_Shovel.png,../images/items/Tigers_Eye_Shovel.png" style="background: url(../images/items/Amethyst_Shovel.png); background-size: 32px 32px;">`
							break;
						case 5:
							newToolLevel = `<span class="sprite inv-sprite" title="A ruby shovel, platinum shovel or better is required to mine this block" data-images="../images/items/Ruby_Shovel.png,../images/items/Platinum_Shovel.png" style="background: url(../images/items/Ruby_Shovel.png); background-size: 32px 32px;">`
							break;
						case 6:
							newToolLevel = `<span class="sprite inv-sprite" title="An ultimate shovel or better is required to mine this block" style="background: url(../images/items/The_Ultimate_Shovel.png); background-size: 32px 32px;">`
							break;
						default:
							newToolLevel = `undefined`

					}
					break;
				case "hoe":
					switch (tool_level) {
						case 0:
							newToolLevel = `<span class="sprite inv-sprite" title="A wooden hoe, crystalwood hoe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Wooden_Hoe.png,../images/items/Crystal_Wood_Hoe.png" style="background: url(https://minecraft.wiki/images/Invicon_Wood_Hoe.png); background-size: 32px 32px;">`
							break;
						case 1:
							newToolLevel = `<span class="sprite inv-sprite" title="A stone hoe, kyanite hoe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Stone_Hoe.png,../images/items/Kyanite_Hoe.png" style="background: url(https://minecraft.wiki/images/Invicon_Stone_Hoe.png); background-size: 32px 32px;">`
							break;
						case 2:
							newToolLevel = `<span class="sprite inv-sprite" title="An iron hoe, pink tourmaline hoe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Iron_Hoe.png,../images/items/Pink_Tourmaline_Hoe.png" style="background: url(https://minecraft.wiki/images/Invicon_Iron_Hoe.png); background-size: 32px 32px;">`
							break;
						case 3:
							newToolLevel = `<span class="sprite inv-sprite" title="A diamond hoe, emerald hoe or better is required to mine this block" data-images="https://minecraft.wiki/images/Invicon_Diamond_Hoe.png,../images/items/Emerald_Hoe.png" style="background: url(https://minecraft.wiki/images/Invicon_Diamond_Hoe.png); background-size: 32px 32px;">`
							break;
						case 4:
							newToolLevel = `<span class="sprite inv-sprite" title="An amethyst hoe, tiger's eye hoe or better is required to mine this block" data-images="../images/items/Amethyst_Hoe.png,../images/items/Tigers_Eye_Hoe.png" style="background: url(../images/items/Amethyst_Hoe.png); background-size: 32px 32px;">`
							break;
						case 5:
							newToolLevel = `<span class="sprite inv-sprite" title="A ruby hoe, platinum hoe or better is required to mine this block" data-images="../images/items/Ruby_Hoe.png,../images/items/Platinum_Hoe.png" style="background: url(../images/items/Ruby_Hoe.png); background-size: 32px 32px;">`
							break;
						case 6:
							newToolLevel = `<span class="sprite inv-sprite" title="An ultimate hoe or better is required to mine this block" style="background: url(../images/items/The_Ultimate_Hoe.png); background-size: 32px 32px;">`
							break;
						default:
							newToolLevel = `undefined`

					}
					break;
				default:
					newToolLevel = `undefined`
			}
		}
	}
	htmlContent = htmlContent.replace(/\${tool_level}/g, newToolLevel);

	document.body.innerHTML = htmlContent
});

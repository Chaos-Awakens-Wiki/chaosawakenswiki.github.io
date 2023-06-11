document.addEventListener("DOMContentLoaded", function() {
	let htmlContent = document.body.innerHTML;

	const title = document.querySelector("title").innerText;
	const newName = title.replace(" | Chaos Awakens Wiki", "");
	htmlContent = htmlContent.replace(/\${name}/g, newName);

	const healthIcon = `<img class="stat-icon" src="../images/misc/Heart.svg" alt="Heart">`
	const halfHealthIcon = `<img class="stat-icon" src="../images/misc/Half_Heart.svg" alt="Heart">`
	let newHealth;
	if (parent.health) {
		const health = parent.health;
		const heartCount = health / 2;
		if (health <= 10) {
			if (health % 2 === 0) {
				newHealth = health + " (" + repeatString(heartCount, healthIcon) + ")"
			} else {
				newHealth = health + " (" + repeatString(heartCount - 1, healthIcon) + halfHealthIcon + ")"
			}
		} else {
			newHealth = health + " (" + heartCount + " x " + healthIcon + ")"
		}
		htmlContent = htmlContent.replace(/\${health}/g, newHealth);
	}

	const armorIcon = `<img class="stat-icon" src="../images/misc/Armor.svg" alt="Armor">`
	const halfArmorIcon = `<img class="stat-icon" src="../images/misc/Half_Armor.svg" alt="Armor">`
	let newArmor;
	if (parent.armor) {
		const armor = parent.armor;
		const armorCount = armor / 2;
		if (armor <= 10) {
			if (armor % 2 === 0) {
				newArmor = armor + " (" + repeatString(armorCount, armorIcon) + ")"
			} else {
				newArmor = armor + " (" + repeatString(armorCount - 1, armorIcon) + halfArmorIcon + ")"
			}
		} else {
			newArmor = armor + " (" + armorCount + " x " + armorIcon + ")"
		}
		htmlContent = htmlContent.replace(/\${armor}/g, newArmor);
	}

	document.body.innerHTML = htmlContent

	let newAttackDamage;
	if (parent.attack_damage <= 10) {
		const attack_damage = parent.attack_damage;
		const attackDamageCount = attack_damage / 2;
		if (attack_damage % 2 === 0) {
			newAttackDamage = attack_damage + " (" + repeatString(attackDamageCount, healthIcon) + ")"
		} else {
			newAttackDamage = attack_damage + " (" + repeatString(attackDamageCount - 1, healthIcon) + halfHealthIcon + ")"
		}
	} else {
		newAttackDamage = attack_damage + " (" + attackDamageCount + " x " + healthIcon + ")"
	}
	htmlContent = htmlContent.replace(/\${attack_damage}/g, newAttackDamage);

	document.body.innerHTML = htmlContent
});

function repeatString(count, repeatedValue) {
	let result = "";
	for (let i = 0; i < count; i++) {
		result += repeatedValue;
	}
	return result;
}

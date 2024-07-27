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
		htmlContent = htmlContent.replace(/\${health}/g, "<span>" + newHealth + "</span>");
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
		htmlContent = htmlContent.replace(/\${armor}/g, "<span>" + newArmor + "</span>");
	}

	let newAttackDamage;
	if (parent.attack_damage) {
		const attack_damage = parent.attack_damage;
		const attackDamageCount = attack_damage / 2;
		if (parent.attack_damage <= 10) {
			if (attack_damage % 2 === 0) {
				newAttackDamage = attack_damage + " (" + repeatString(attackDamageCount, healthIcon) + ")"
			} else {
				newAttackDamage = attack_damage + " (" + repeatString(attackDamageCount - 1, healthIcon) + halfHealthIcon + ")"
			}
		} else {
			newAttackDamage = attack_damage + " (" + attackDamageCount + " x " + healthIcon + ")"
		}
	}
	htmlContent = htmlContent.replace(/\${attack_damage}/g, "<span>" + newAttackDamage + "</span>");

	let newAttackNumberDamage;
	for (let i = 1; i <= 10; i++) {
		const attack_damage_key = `attack${i}_damage`;
		const attack_damage = parent[attack_damage_key]
		if (attack_damage) {
			const attackDamageCount = attack_damage / 2;
			if (attack_damage <= 10) {
				if (attack_damage % 2 === 0) {
					newAttackNumberDamage = attack_damage + " (" + repeatString(attackDamageCount, healthIcon) + ")"
				} else {
					newAttackNumberDamage = attack_damage + " (" + repeatString(attackDamageCount - 1, healthIcon) + halfHealthIcon + ")"
				}
			} else {
				newAttackNumberDamage = attack_damage + " (" + attackDamageCount + " x " + healthIcon + ")"
			}
			let placeholder = new RegExp(`${attack_damage_key}`);
			let placeholderDown = placeholder.toString().replaceAll('/', '').replaceAll('\\', '')
			htmlContent = htmlContent.replace("${" + placeholderDown + "}", "<span>" + newAttackDamage + "</span>");
			
		}
	}

	let newAttackSpeed;
	if (parent.attack_speed) {
		newAttackSpeed = parent.attack_speed
	}
	htmlContent = htmlContent.replace(/\${attack_speed}/g, newAttackSpeed);

	let newMovementSpeed;
	if (parent.movement_speed) {
		newMovementSpeed = parent.movement_speed
	}
	htmlContent = htmlContent.replace(/\${movement_speed}/g, newMovementSpeed);

	let newFlyingSpeed;
	if (parent.flying_speed) {
		newFlyingSpeed = parent.flying_speed
	}
	htmlContent = htmlContent.replace(/\${flying_speed}/g, newFlyingSpeed);

	let newKnockbackResistance;
	if (parent.knockback_resistance) {
		newKnockbackResistance = parent.knockback_resistance
	}
	htmlContent = htmlContent.replace(/\${knockback_resistance}/g, newKnockbackResistance);

	let newFollowRange;
	if (parent.follow_range) {
		newFollowRange = parent.follow_range
	}
	htmlContent = htmlContent.replace(/\${follow_range}/g, newFollowRange);

	let newWidth;
	if (parent.width) {
		const width = parent.width;
		newWidth = "Width: " + width + " Blocks"
	}
	htmlContent = htmlContent.replace(/\${width}/g, newWidth);

	let newHeight;
	if (parent.height) {
		const height = parent.height;
		newHeight = "Height: " + height + " Blocks"
	}
	htmlContent = htmlContent.replace(/\${height}/g, newHeight);

	let newWidthBaby;
	if (parent.width_baby) {
		const width_baby = parent.width_baby;
		newWidthBaby = "Width: " + width_baby + " Blocks"
	}
	htmlContent = htmlContent.replace(/\${width_baby}/g, newWidthBaby);

	let newHeightBaby;
	if (parent.height_baby) {
		const height_baby = parent.height_baby;
		newHeightBaby = "Height: " + height_baby + " Blocks"
	}
	htmlContent = htmlContent.replace(/\${height_baby}/g, newHeightBaby);

	document.body.innerHTML = htmlContent
});

function repeatString(count, repeatedValue) {
	let result = "";
	for (let i = 0; i < count; i++) {
		result += repeatedValue;
	}
	return result;
}

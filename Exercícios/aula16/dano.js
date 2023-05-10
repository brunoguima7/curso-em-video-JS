let attacker = prompt("Qual o nome do personagem atacante?")
let attackPower = prompt("Qual o seu poder de ataque?")

let defender = prompt("Qual o nome do personagem defensor?")
let lifePoints = prompt("Qual a quantidade de vida que ele possuí?")
let defensePower = prompt("Qual o seu poder de defesa?")
let haveShield = prompt("Possui escudo? (Sim/Não)")

let damage = 0

if(attackPower > defensePower && haveShield == "Não") {
    damage = attackPower - defensePower
}
    else if(attackPower > defensePower && haveShield == "Sim") {
        damage = (attackPower - defensePower) / 2

    }

lifePoints -= damage

alert(attacker + " causou " + damage + " pontos de dano em " + defender + 
      "\n\nPontos de vida restantes do defensor: " + lifePoints)
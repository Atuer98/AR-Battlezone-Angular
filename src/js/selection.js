function selectionCharacter() {

  const characters = [
    "character_warrior.jpg", "character_bow.jpg"
  ];
  
  let currentCharacterIndex = 0;
  
  document.getElementById("left-btn-character").addEventListener("click", () => {
    currentCharacterIndex =
      (currentCharacterIndex - 1 + characters.length) % characters.length;
      document.getElementById("character_selection").src="../../src/images/characters/"+ characters[currentCharacterIndex];
  });
  
  document.getElementById("right-btn-character").addEventListener("click", () => {
    currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
    document.getElementById("character_selection").src="../../src/images/characters/"+ characters[currentCharacterIndex];
  });

  const weapons = [
    "weapon_sword.jpg", "weapon_bow.jpg"
  ];
  let currentWeaponIndex = 0;

  document.getElementById("left-btn-weapon").addEventListener("click", () => {
    currentWeaponIndex =
      (currentWeaponIndex - 1 + weapons.length) % weapons.length;
      document.getElementById("weapon_selection").src="../../src/images/weapons/"+ weapons[currentWeaponIndex];
  });
  
  document.getElementById("right-btn-weapon").addEventListener("click", () => {
    currentWeaponIndex = (currentWeaponIndex + 1) % weapons.length;
    document.getElementById("weapon_selection").src="../../src/images/weapons/"+ weapons[currentWeaponIndex];
  });
}

function selectionArena() {
  const arenas = [
    "arena1.jpg", "arena2.jpg"
  ];
  
  let currentArenaIndex = 0;

  document.getElementById("left-btn-arena").addEventListener("click", () => {
    currentArenaIndex =
      (currentArenaIndex - 1 + arenas.length) % arenas.length;
      document.getElementById("arena_selection").src="../../src/images/arenas/"+ arenas[currentArenaIndex];
  });
  
  document.getElementById("right-btn-arena").addEventListener("click", () => {
    currentArenaIndex = (currentArenaIndex + 1) % arenas.length;
    document.getElementById("arena_selection").src="../../src/images/arenas/"+ arenas[currentArenaIndex];
  });
}



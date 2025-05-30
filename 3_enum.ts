// Помогает структурировать код, если присутствуют однотипные элементы

enum Membership {
  SIMPLE,
  STANDART,
  PREMIUM,
}

// Покажет порядковый номер // 0
const membership = Membership.SIMPLE;
console.log(membership);

// Если по порядковому номеру, то покажет название // SIMPLE
const membershipReverse = Membership[0];
console.log(membershipReverse);

// Запись при которой enum покажет название элементы

enum SocialMedia {
  FB = "Facebook",
  Instagram = "Instagram",
  TikTok = "TikTok",
}

const favoriteMedia = SocialMedia.TikTok;
console.log(favoriteMedia);

// Еще одна проблема ENUMS
// Если есть 2 ENUM с одинаковыми значениями, то TS не сможет понять, что думает что это разные типы

enum ENUM1 {
  value = "value",
}

enum ENUM2 {
  value = "value",
}

function doSomething(value: ENUM1) {}
doSomething(ENUM2.value); // Ошибка: Argument of type 'ENUM2' is not assignable to parameter of type 'ENUM1'.

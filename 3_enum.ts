// Помогает структурировать код, если присутствуют однотипные элементы

enum Membership {
    SIMPLE,
    STANDART,
    PREMIUM
}

// Покажет порядковый номер // 0
const membership = Membership.SIMPLE
console.log(membership)

// Если по порядковому номеру, то покажет название // SIMPLE
const membershipReverse = Membership[0]
console.log(membershipReverse)

// Запись при которой enum покажет название элементы

enum SocialMedia {
    FB = 'Facebook',
    Instagram = 'Instagram',
    TikTok = 'TikTok'
}

const favoriteMedia = SocialMedia.TikTok
console.log(favoriteMedia)
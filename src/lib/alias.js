const aliases = {
    'root': 'Rxflex',
    'dxrkyvo1d': 'dxrkyblood',
}
export function checkAlias (nickname) {
    return aliases[nickname] || nickname;
}
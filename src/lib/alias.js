const aliases = {
    'root': 'Rxflex',
    'dxrkyvo1d': 'dxrkyblood',
    'nellex': 'NellexBEST',
    'devops': 'NellexBEST'
}
export function checkAlias (nickname) {
    return aliases[nickname] || nickname;
}
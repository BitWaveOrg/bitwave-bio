const aliases = {
    'root': 'Rxflex',
    'dxrkyvo1d': 'dxrkyblood',
    'nellex': 'NellexBEST',
    'devops': 'NellexBEST',
    'pure': 'SwitchzzZ3Zcpp'
}
export function checkAlias (nickname) {
    return aliases[nickname] || nickname;
}
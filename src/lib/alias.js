const aliases = {
    'root': 'Rxflex'
}
export function checkAlias (nickname) {
    return aliases[nickname] || nickname;
}
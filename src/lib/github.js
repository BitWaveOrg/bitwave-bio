import YAML from 'yaml'

export function getGitHubAvatarUrl(username) {
    return `https://github.com/${username}.png`;
}

export async function getGitHubConfig(username) {
    const url = `https://raw.githubusercontent.com/${username}/${username}/main/config.yml`;
    const config = await fetch(url, {
        next: { revalidate: 5 },
    }).then((res) => res.text());
    if (config.startsWith('404')) return null;
    try {
        return YAML.parse(config);
    } catch (e) {
        return null;
    }
}
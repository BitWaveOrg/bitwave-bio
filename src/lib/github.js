import YAML from 'yaml'

export function getGitHubAvatarUrl(username) {
    return `https://github.com/${username}.png`;
}

export async function getGitHubConfig(username) {
    const config = await getConfig(username);
    if (!config) return await getConfig(username, '.github');
    return config;
}

async function getConfig(username, repository=username) {
    const asset = await getGithubAsset(`${username}/${repository}/main/config.yml`);
    if (!asset) return null;
    return YAML.parse(asset);
}

async function getGithubAsset(url) {
    const res = await fetch(`https://raw.githubusercontent.com/${url}`, {
        next: { revalidate: 60 },
    }).then((res) => res.text());
    if (res.startsWith('404')) return null;
    return res;
}
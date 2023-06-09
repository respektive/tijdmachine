export async function load({ fetch, url }) {
    const mode = url.searchParams.get("mode") ?? "osu";
    const type = url.searchParams.get("type") ?? "performance";
    const response = await fetch(`/api/rankings?type=${type}&mode=${mode}`);
    const json = await response.json();

    return {
        rankings: json.rankings,
        snapshots: json.rankings.map((e) => e.snapshotDate),
        type: json.type,
        mode: json.mode,
    };
}

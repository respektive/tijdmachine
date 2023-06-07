import { MongoClient } from "mongodb";
import { DATABASE_URL } from "$env/static/private";

const client = new MongoClient(DATABASE_URL);

export async function start() {
    try {
        await client.connect();
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

export async function stop() {
    try {
        await client.close();
    } catch (error) {
        console.error("Failed to close MongoDB connection:", error);
    }
}

export function getClient() {
    return client;
}

export function getCollection(mode, type) {
    const MODES = ["osu", "taiko", "fruits", "mania"];
    const TYPES = ["performance", "score"];

    const validMode = MODES.includes(mode) ? mode : "osu";
    const validType = TYPES.includes(type) ? type : "performance";

    const dbString = `${validType}LeaderboardSnapshotsDB`;
    const collectionString = `${validMode}Snapshots`;

    return { dbString, collectionString };
}

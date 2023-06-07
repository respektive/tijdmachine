import { getClient, getCollection } from "$lib/server/mongo.js";
import { error, json } from "@sveltejs/kit";

export async function GET({ url }) {
    const mode = url.searchParams.get("mode");
    const type = url.searchParams.get("type");

    try {
        const client = getClient();
        const { dbString, collectionString } = getCollection(mode, type);

        const db = client.db(dbString);
        const collection = db.collection(collectionString);
        const data = await collection
            .find({}, { projection: { _id: 0, snapshotDate: 1 } })
            .sort({ snapshotDate: 1 })
            .toArray();

        return new json({
            snapshots: data.map((e) => e.snapshotDate),
        });
    } catch {
        throw error(500, "Internal Server Error");
    }
}

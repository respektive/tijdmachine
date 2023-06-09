import { getClient, getCollection } from "$lib/server/mongo.js";
import { error, json } from "@sveltejs/kit";

export async function GET({ url }) {
    const mode = url.searchParams.get("mode");
    const type = url.searchParams.get("type");
    const date = url.searchParams.get("date");
    const before = url.searchParams.get("before");
    const after = url.searchParams.get("after");

    try {
        const client = getClient();
        const { dbString, collectionString, validMode, validType } = getCollection(mode, type);

        const db = client.db(dbString);
        const collection = db.collection(collectionString);
        if (date) {
            return new json(
                await collection.findOne({ snapshotDate: date }, { projection: { _id: 0 } })
            );
        }

        const query = {};
        if (before) query.snapshotDate = { $lt: before };
        if (after) query.snapshotDate = { $gte: after };

        const data = await collection
            .find(query, { projection: { _id: 0 } })
            .sort({ snapshotDate: 1 })
            .toArray();

        return new json({
            rankings: data,
            mode: validMode,
            type: validType,
        });
    } catch {
        throw error(500, "Internal Server Error");
    }
}

import { start, stop } from "$lib/server/mongo.js";

export async function handle({ event, resolve }) {
    await start();

    const response = await resolve(event);

    await stop();

    return response;
}

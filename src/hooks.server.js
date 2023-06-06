import { start, stop } from "$lib/api/mongo.js";

export async function handle({ event, resolve }) {
    await start();

    const response = await resolve(event);

    await stop();

    return response;
}

// @ts-nocheck
import { API_KEY } from '$env/static/private';

export async function load() {
    return {
        token: API_KEY
      };
}
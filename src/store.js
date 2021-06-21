import { writable } from 'svelte/store';

export const writableArray = writable([]);
export const lastButtonPressed = writable('lastButton');
export const videoEnded = writable(false);
export const videoScene = writable(false);
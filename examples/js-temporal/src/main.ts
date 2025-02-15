import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
// @ts-expect-error
globalThis.Intl.DateTimeFormat = Intl.DateTimeFormat;
// @ts-expect-error
Date.prototype.toTemporalInstant = toTemporalInstant;

console.log(Temporal.Now.zonedDateTimeISO().toString());

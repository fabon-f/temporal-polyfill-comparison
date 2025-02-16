import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
// @ts-expect-error
globalThis.Intl.DateTimeFormat = Intl.DateTimeFormat;
// @ts-expect-error
Date.prototype.toTemporalInstant = toTemporalInstant;

const now = Temporal.Now.zonedDateTimeISO();
console.log(now.toString());
console.log(new Intl.DateTimeFormat('en-US').format(now.toPlainDate()));

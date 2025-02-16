// @ts-expect-error
const now = Temporal.Now.zonedDateTimeISO();
console.log(now.toString());
console.log(new Intl.DateTimeFormat('en-US').format(now.toPlainDate()));

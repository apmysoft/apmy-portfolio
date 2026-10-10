/** Dates with month precision use the first day; period ends include the final month. */
export function today() {
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Madrid' }).format(new Date());
}
export function timestamp(date, endOfMonth = false) {
    const [year, month, day = 1] = date.split('-').map(Number);
    return endOfMonth ? Date.UTC(year, month, 1) : Date.UTC(year, month - 1, day);
}
export function fraction(date, start, end, endOfMonth = false) {
    const value = date === 'today' ? timestamp(end) : timestamp(date, endOfMonth);
    return Math.max(0, Math.min(1, (value - timestamp(start)) / (timestamp(end) - timestamp(start))));
}
/** CSS reserves grow with text zoom when JavaScript cannot measure the cards. */
export function staticCards(items, length, mobile) {
    const mode = mobile ? 'mobile' : 'desktop';
    const estimate = `var(--timeline-${mode}-estimate)`;
    const latest = { left: -1, right: -1 };
    const distances = [];
    const variables = [];
    const tops = items.map((item, index) => {
        const lane = mobile ? 'right' : item.side;
        const constraints = items.slice(0, index + 1).map((source, start) => {
            distances[start] ??= [];
            const sameLane = latest[lane];
            const gaps = start === index ? 0 : Math.max(
                distances[start][index - 1],
                sameLane >= start ? distances[start][sameLane] + 1 : 0,
            );
            distances[start][index] = gaps;
            const anchor = Math.max(0, source.position * length - 12);
            return gaps ? `calc(${anchor + gaps * 64}px + ${gaps} * ${estimate})` : `${anchor}px`;
        });
        const name = `--timeline-${mode}-card-${index}`;
        // Flat constraints avoid exponential custom-property substitution limits.
        variables.push(`${name}:max(${constraints.join(',')});`);
        latest[lane] = index;
        return `var(${name})`;
    });
    return { variables: variables.join(''), tops,
        height: `max(${length + 180}px,${tops.map(top => `calc(${top} + ${estimate} + 80px)`).join(',')})` };
}

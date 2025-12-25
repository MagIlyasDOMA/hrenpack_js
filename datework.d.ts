declare class datetime {
    private _year;
    private _month;
    private _days;
    private _hours;
    private _minutes;
    private _seconds;
    private date;
    constructor(_year: number, _month: number, _days: number, _hours: number, _minutes: number, _seconds: number);
    private static newObject;
    static now(): datetime;
    static fromTimestamp(timestamp: number): datetime;
    get year(): number;
    get month(): number;
    get days(): number;
    get hours(): number;
    get minutes(): number;
    get seconds(): number;
    set year(year: number);
    set month(month: number);
    set days(days: number);
    set hours(hours: number);
    set minutes(minutes: number);
    set seconds(seconds: number);
    timestamp(): number;
}
//# sourceMappingURL=datework.d.ts.map
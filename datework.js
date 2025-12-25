"use strict";
class datetime {
    constructor(_year, _month, _days, _hours, _minutes, _seconds) {
        Object.defineProperty(this, "_year", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _year
        });
        Object.defineProperty(this, "_month", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _month
        });
        Object.defineProperty(this, "_days", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _days
        });
        Object.defineProperty(this, "_hours", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _hours
        });
        Object.defineProperty(this, "_minutes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _minutes
        });
        Object.defineProperty(this, "_seconds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _seconds
        });
        Object.defineProperty(this, "date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.date = new Date(this._year, this._month, this._days, this._hours, this._minutes, this._seconds);
    }
    static newObject(dateObject) {
        return new datetime(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate(), dateObject.getHours(), dateObject.getMinutes(), dateObject.getSeconds());
    }
    static now() {
        return datetime.newObject(new Date());
    }
    static fromTimestamp(timestamp) {
        return datetime.newObject(new Date(timestamp));
    }
    get year() { return this._year; }
    get month() { return this._month; }
    get days() { return this._days; }
    get hours() { return this._hours; }
    get minutes() { return this._minutes; }
    get seconds() { return this._seconds; }
    set year(year) { this._year = year; }
    set month(month) { this._month = month; }
    set days(days) { this._days = days; }
    set hours(hours) { this._hours = hours; }
    set minutes(minutes) { this._minutes = minutes; }
    set seconds(seconds) { this._seconds = seconds; }
    timestamp() {
        return this.date.getTime();
    }
}
//# sourceMappingURL=datework.js.map
class datetime {
    private date: Date;

    constructor(private _year: number,
                private _month: number,
                private _days: number,
                private _hours: number,
                private _minutes: number,
                private _seconds: number) {
        this.date = new Date(this._year, this._month, this._days, this._hours, this._minutes, this._seconds);
    }

    private static newObject(dateObject: Date) {
        return new datetime(
            dateObject.getFullYear(),
            dateObject.getMonth(),
            dateObject.getDate(),
            dateObject.getHours(),
            dateObject.getMinutes(),
            dateObject.getSeconds(),
        )
    }

    static now() {
        return datetime.newObject(new Date())
    }

    static fromTimestamp(timestamp: number) {
        return datetime.newObject(new Date(timestamp))
    }

    get year() {return this._year}
    get month() {return this._month}
    get days() {return this._days}
    get hours() {return this._hours}
    get minutes() {return this._minutes}
    get seconds() {return this._seconds}

    set year(year: number) {this._year = year}
    set month(month: number) {this._month = month}
    set days(days: number) {this._days = days}
    set hours(hours: number) {this._hours = hours}
    set minutes(minutes: number) {this._minutes = minutes}
    set seconds(seconds: number) {this._seconds = seconds}

    timestamp(): number {
        return this.date.getTime()
    }
}
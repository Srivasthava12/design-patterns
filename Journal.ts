const fs = require('fs')


class Journal {
    entries: any
    static count: any;
    constructor() {
        this.entries = []
    }
    add(txt:any) {
        const count = ++Journal.count;
        const entry = `${count}: ${txt}`;
        this.entries[count] = entry;
        console.log("entry saved !");
        fs.writeFileSync('journal.txt', this.toString());
        console.log("Done !!");
        return count
    }
    toString()
    {
      return Object.values(this.entries).join('\n');
    }
}
Journal.count = 0

export default Journal

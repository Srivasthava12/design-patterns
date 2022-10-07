const fs = require('fs')


class Journal {
    entries: any
    static count: any;
    constructor() {
        this.entries = []
    }
    add(txt) {
        const count = ++Journal.count;
        const entry = `${count}: ${txt}`;
        this.entries[count] = entry;
        console.log("entry saved !");
        return count
    }
    toString()
    {
      return Object.values(this.entries).join('\n');
    }
    
  saveToFile(journal, filename)
  {
    fs.writeFileSync(filename, journal.toString());
    console.log("Done !!");
  }
}
Journal.count = 0;

const j = new Journal();
j.add('I played football');
j.add('I ran today.');
console.log(j.toString());
j.saveToFile(j, 'filename.txt')


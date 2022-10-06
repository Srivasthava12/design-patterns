const fs = require('fs')


class Journal {
    constructor() {
        this.entries = []
    }
    add(txt) {
        const count = ++Journal.count;
        const entry = `${count}: ${txt}`;
        this.entries[count] = entry;
        return count
    }
    toString()
    {
      return Object.values(this.entries).join('\n');
    }
}
Journal.count = 0;

class PersistenceManager
{
  preprocess(j)
  {
    //
  }

  saveToFile(journal, filename)
  {
    fs.writeFileSync(filename, journal.toString());
    console.log("Done !!");
  }
}

const j = new Journal();
j.add('I played football');
j.add('I ran today.');
console.log(j.toString());

const p =new PersistenceManager();
const filename = 'journal.txt'
p.saveToFile(j, filename);
import Logger from './Logger';
import PersistenceManager from './PersistenceManager'



class Journal {
    entries: any
    static count: any;
    persistenceManager = new PersistenceManager()
    logger= new Logger()
    constructor() {
        this.entries = []
    }
    add(txt:any) {

        const count = ++Journal.count;
        const entry = `${count}: ${txt}`;
        this.entries[count] = entry;

        /**Logger follows SRP */
        this.logger.log("Entry Saved !!")

        /**Seperation of concern */
        this.persistenceManager.saveFile(this.toString(), 'journal.txt')

        this.logger.log("DONE !!")

        return count
    }
    toString()
    {
      return Object.values(this.entries).join('\n');
    }
}
Journal.count = 0

export default Journal

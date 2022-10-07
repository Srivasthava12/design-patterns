const fs = require('fs')


class PersistenceManager {
    constructor(){}

    saveFile(data:any, fileName:string) {
        fs.writeFileSync(fileName, data);
    }
}


export default PersistenceManager
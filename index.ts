import Journal from './Journal'



class Program {
    start() {
        const j = new Journal();
        j.add('I played football');
        j.add('I ran today.');
        console.log(j.toString());
    }
}

const program =  new Program()

program.start()

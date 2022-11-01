const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const prompt = require('prompt-sync')();


// let count = 0;
// while(true){
//   const input = prompt ('Enter w or s')
//   if(input === 'w'){
//     count++;
//   }else if (input === 's'){
//     count--;
//   }else {
//     console.log(input)
// }
// console.log(count)



const defaultField = [
  [pathCharacter, hole, fieldCharacter], //00 01 02
  [fieldCharacter, hole, fieldCharacter], //10 11 12
  [fieldCharacter, hat, fieldCharacter],  //20 21 22
  [fieldCharacter, hole, fieldCharacter], // 30 31 33
]

class Field {
  constructor(field=[[]]){
    this.field = field
    this.field[0][0] = pathCharacter
    // this.locationX = 0;
    // this.locationY = 0;
  }

  mvRight(){
    if(this.field[0] + 1 < this.field[0].length){
    this.field[0]++
  }
  }
  mvLeft(){
    if(this.field[0] - 1 >=0){ 
    this.field[0]--
    }
  }
  mvUp(){
     if(this.field[1] - 1 >=0){ 
    this.field[1]--
    }
  }
  mvDown(){
    if(this.field[0] + 1 < this.field[0].length){
    this.field[1]++
  }
} 


  
  
print(){
  //TODO: Use loop and join to print array
  console.log(this.field)
  }


  static generateRandomField(){
    
  }
  
}
// const PlayGame = () => {
//   const input = prompt('Move ')();
//     switch (input) {
//       case 'w':
//         this.locationY += 1;
//         break;
//       case 's':
//         this.locationX -= 1;
//         break;
//       default:
//         console.log('input w or s');
//         this.getInput();
//         break;
//     }
// }



const myField = new Field(defaultField) // Field.generateRandomField()
while(true){
  const input = prompt('move (w,a,s,d):')
  switch(input){
    case 'w':
      myField.mvUp()
      break;
      case 'a':
      myField.mvLeft()
      break;
      case 's':
      myField.mvDown()
      break;
      case 'd':
      myField.mvRight()
      break;
  }
}

// myField.mvRight //test
// console.log(myField.field) //test
myField.print()

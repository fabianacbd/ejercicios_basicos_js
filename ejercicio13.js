const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, name)

    {
const position = nameList.indexOf(name);
if (position === -1) {
  console.log(false, "El elemento no esta en el array")
} else {
  console.log(true, position);
}

    }
 
  nameFinder(names, "Tony")
expect = (testedProperty) => {
  return {
    toEqual: (assertion) => {
      console.log(testedProperty === assertion ? "Pass" : "Fail");
    },
  };
};

it = (testMessage, callback) => {
  console.log(testMessage);
  var notepad = new Notepad();
  callback(notepad);
};

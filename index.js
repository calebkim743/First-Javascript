let gameCharacter = {
  name: 'Caleb',
  class:'Human'
  get title () {
      return this.name+'the'+this.class;
  }
  xpos: 0,
  items: ['knife', 'pork meat'],
  move: function (x) {
    this.xpos += x;
  },
};
gameCharacter.title;


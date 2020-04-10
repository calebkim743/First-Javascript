let gameCharacter = {
  name: 'Caleb',
  class: 'Human',
  health: 100,
  get title() {
    return this.name + 'the' + this.class;
  },
  set maxhealth(h) {
    this.health = h;
  },
  xpos: 0,
  items: ['knife', 'pork meat'],
  move: function (x) {
    this.xpos += x;
  },
};

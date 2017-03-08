// @flow

class Dog {
  name: string
  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `hav hav, ${this.name}`;
  }
}

export default Dog;

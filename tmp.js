const cssSelectorBuilder = {
  element(value) {
    // throw new Error('Not implemented');
    // const item = {...this};
    this.elementValue = this.elementValue ? this.elementValue += value : this.elementValue = value;
    // if (!this.elementValue) {
    //   this.elementValue = this;
    // } else {
    //   this.elementValue += this;
    // }
    // console.log(this);
    return this;
  },

  id(value) {
    // throw new Error('Not implemented');
    console.log('id', value);
    if (!this.idValue) {
      this.idValue = `#${value}`;
    } else {
      this.idValue += `#${value}`;
    }
    return this;
  },

  class(value) {
    // throw new Error('Not implemented');
    console.log('class ',value);
    return this
  },

  attr(value) {
    // throw new Error('Not implemented');
    console.log('attr ', value);
    return this
  },

  pseudoClass(value) {
    // throw new Error('Not implemented');
    console.log('pseudoClass ', value);
    return this
  },

  pseudoElement(value) {
    // throw new Error('Not implemented');
    console.log('pseudoElement ', value);
    return this
  },

  combine(selector1, combinator, selector2) {
    // throw new Error('Not implemented');
    console.log(selector1, combinator, selector2);
    return this
  },

  stringify(){
    if (this.value) {
      return this.value;
    }
    let value = '';
    if (this.elementValue) value += this.elementValue;
    if (this.idValue) value += this.idValue;
    if (this.classValue) value += this.classValue;
    if (this.attributeValue) value += this.attributeValue;
    if (this.pseudoClassValue) value += this.pseudoClassValue;
    if (this.pseudoElementValue) value += this.pseudoElementValue;
    console.log(value);
    return value;
  }
};

const builder = cssSelectorBuilder;

builder.element('div').stringify();
// builder.id('nav-bar').stringify();
// builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
// builder.combine(
//   builder.element('div').id('main').class('container').class('draggable'),
//   '+',
//   builder.combine(
//     builder.element('table').id('data'),
//     '~',
//     builder.combine(
//       builder.element('tr').pseudoClass('nth-of-type(even)'),
//       ' ',
//       builder.element('td').pseudoClass('nth-of-type(even)'),
//     ),
//   ),
// ).stringify()

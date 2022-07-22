/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  // throw new Error('Not implemented');
  this.width = width;
  this.height = height;

  // eslint-disable-next-line func-names
  this.getArea = function () {
    return this.width * this.height;
  };
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  // throw new Error('Not implemented');
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  // throw new Error('Not implemented');
  const subObject = JSON.parse(json);
  return Object.create(proto, Object.getOwnPropertyDescriptors(subObject));
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  errorDuplicate: 'Element, id and pseudo-element should not occur more then one time inside the selector',
  errorOrder: 'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
  order: [],

  checkorder() {
    const countEl = this.order.filter((item) => item === 1).length;
    const countId = this.order.filter((item) => item === 2).length;
    const countPs = this.order.filter((item) => item === 6).length;
    if (countEl > 1 || countId > 1 || countPs > 1) {
      throw new Error(this.errorDuplicate);
    }
    const sorted = [...this.order];
    sorted.sort((a, b) => a - b);
    sorted.forEach((item, index) => {
      if (item !== this.order[index]) {
        throw new Error(this.errorOrder);
      }
    });
  },

  element(value) {
    // throw new Error('Not implemented');
    const instance = { ...this };
    instance.order = [...this.order, 1];
    instance.elementVal = instance.elementVal ? instance.elementVal + value : value;
    instance.checkorder();
    return instance;
  },

  id(value) {
    // throw new Error('Not implemented');
    const instance = { ...this };
    instance.order = [...this.order, 2];
    instance.idVal = instance.idVal ? `${instance.idVal}#${value}` : `#${value}`;
    instance.checkorder();
    return instance;
  },

  class(value) {
    // throw new Error('Not implemented');
    const instance = { ...this };
    instance.order = [...this.order, 3];
    instance.classVal = instance.classVal ? `${instance.classVal}.${value}` : `.${value}`;
    instance.checkorder();
    return instance;
  },

  attr(value) {
    // throw new Error('Not implemented');
    const instance = { ...this };
    instance.order = [...this.order, 4];
    instance.attrVal = instance.attrVal ? `${instance.attrVal}[${value}]` : `[${value}]`;
    instance.checkorder();
    return instance;
  },

  pseudoClass(value) {
    // throw new Error('Not implemented');
    const instance = { ...this };
    instance.order = [...this.order, 5];
    instance.pseudoClassVal = instance.pseudoClassVal ? `${instance.pseudoClassVal}:${value}` : `:${value}`;
    instance.checkorder();
    return instance;
  },

  pseudoElement(value) {
    // throw new Error('Not implemented');
    const instance = { ...this };
    instance.order = [...this.order, 6];
    instance.pseudoElementVal = instance.pseudoElementVal ? `${instance.pseudoElementVal}::${value}` : `::${value}`;
    instance.checkorder();
    return instance;
  },

  combine(selector1, combinator, selector2) {
    // throw new Error('Not implemented');
    const instance = { ...this };
    const newValue = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    instance.value = instance.value ? instance.value + newValue : newValue;
    return instance;
  },

  stringify() {
    if (this.value) {
      return this.value;
    }
    let value = '';
    if (this.elementVal) value += this.elementVal;
    if (this.idVal) value += this.idVal;
    if (this.classVal) value += this.classVal;
    if (this.attrVal) value += this.attrVal;
    if (this.pseudoClassVal) value += this.pseudoClassVal;
    if (this.pseudoElementVal) value += this.pseudoElementVal;
    return value;
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};

(function () {
'use strict';

function assert (message, expr) {
  if (!expr) {
    throw new Error(message)
  }
  assert.count += 1;
  return true
}

function output (text, color) {
  var p = window.document.createElement('p');
  p.innerHTML = text;
  p.style.color = color;
  document.body.appendChild(p);
}

function testCase (name, tests) {
  assert.count = 0;
  let successful = 0;
  let testCount = 0;

  const hasSetup = typeof tests.setup === 'function';
  const hasTeardown = typeof tests.tearDown === 'function';
  for (let test in tests) {
    if (!/^test/.test(test)) {
      continue
    }
    testCount++;

    if (hasSetup) {
      tests.setup();
    }
    try {
      tests[test]();
      output(test, 'green');
      if (hasTeardown) {
        tests.tearDown();
      }
      successful += 1;
    } catch (e) {
      output(`${test} failed ${e.message}`, 'red');
    }
  }
  const color = successful === testCount ? 'green' : 'red';
  output(
    `<strong>${testCount} tests ${testCount - successful} failure</strong>`,
    color
  );
}

function zeroPad (num) {
  return num < 10 ? `0${num}` : `${num}`
}

const formats = {
  d: date => zeroPad(date.getDate()),
  m: date => zeroPad(date.getMonth() + 1),
  y: date => zeroPad(date.getYear() % 100),
  Y: date => `${date.getFullYear()}`,
  F: '%Y-%m-%d',
  D: '%m-%d-%y'
};

function strftime (format, date) {
  const result = format.replace(/%([a-zA-Z])/g, (m, f) => {
    const formatter = formats[f];
    if (typeof formatter === 'function') {
      return formatter(date)
    } else if (typeof formatter === 'string') {
      return strftime(formatter, date)
    }
    return f
  });
  return result
}

const tests = {
  setup: function setup () {
    this.date = new Date(2009, 9, 2);
  },
  'test format specifier %Y': function () {
    const format = '%Y';
    const expected = '2009';
    const actual = strftime(format, this.date);
    assert('%Y should return full year', actual === expected);
  },
  'test format specifier %d': function () {
    const format = '%d';
    const expected = '02';
    const actual = strftime(format, this.date);
    assert('%d should return the date', actual === expected);
  },
  'test format specifier %m': function () {
    const format = '%m';
    const expected = '10';
    const actual = strftime(format, this.date);
    assert('%m should return the month', actual === expected);
  },
  'test format specifier %y': function () {
    const format = '%y';
    const expected = '09';
    const actual = strftime(format, this.date);
    assert('%y should return year shorthand', actual === expected);
  }
};

testCase('strftime test', tests);

}());

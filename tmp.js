function angleBetweenClockHands(date) {

  const hours = (date.getUTCHours() > 12) ? date.getUTCHours() - 12 : date.getUTCHours();

  let degrees = (hours % 12 || 12) * 30 - date.getUTCMinutes() * 6;
  // degrees = Math.abs(180 - degrees);
  console.log(degrees);
  // degrees = Math.abs(360 - degrees);
  degrees = (degrees === 360) ? 0 : degrees;
  degrees = (degrees > 180) ? degrees - 180 : degrees;
  // degrees = (degrees < 0) ? degrees + 90: degrees;

  const radian = (degrees / 180) * Math.PI;
  
  console.log(degrees, radian);
  
  return radian;
}

let aaa = Date.UTC(2016, 3, 5, 0, 0);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 0 deg -----------------------', new Date(aaa));

aaa = Date.UTC(2016, 3, 5, 3, 0);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 90 deg -----------------------', new Date(aaa));

aaa = Date.UTC(2016, 3, 5, 15, 0);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 90 deg -----------------------', new Date(aaa));

aaa = Date.UTC(2016, 3, 5, 6, 0);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 180 deg -----------------------', new Date(aaa));

aaa = Date.UTC(2016, 3, 5, 18, 0);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 180 deg -----------------------', new Date(aaa));

aaa = Date.UTC(2016, 3, 5, 9, 0);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 90 deg -----------------------', new Date(aaa));

aaa = Date.UTC(2016, 3, 5, 21, 0);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 90 deg -----------------------', new Date(aaa));

aaa = Date.UTC(2016, 3, 5, 14, 20);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 50 deg-----------------------', new Date(aaa));

aaa = Date.UTC(2016, 3, 5, 23, 55);
angleBetweenClockHands(new Date(aaa));
console.log('------------------- 27.5 deg-----------------------', new Date(aaa));
//LESSON 23

const numbers = [
    10,
    21,
    32,
    43,
    54,
    65,
    76,
    87,
    98,
    109];

    let sum = 0;

    for (let i=0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            sum = sum + numbers[i];
        }
    }
    console.log("Sum of numbers:" + sum);

    let min = Infinity;
    let max = -Infinity;

    for (let i=0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number"){
            if (numbers[i] < min) {
            min = numbers[i];
            }
            if (numbers[i] > max) {
            max = numbers[i];
            }
        }
    }
    console.log("Minimal:" + min);
    console.log("Maximum:" + max);

    let tree = "";
    for (let i = 0; i < 5; i++) {
        tree += "#";
        console.log(tree);
      }

//LESSON 26

function Accumulator(initialValue) {
    this.value = initialValue;
    this.increment = function() {
      this.value++;
    }
    
    this.decrement = function() {
      this.value--;
    }
    return this.value
  }

const accumulator = new Accumulator(5);
accumulator.increment();
accumulator.decrement();
console.log(accumulator.value);


function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue);
    this.clear = function() {
        this.value = initialValue;
    }
}
const can = new CancelableAccumulator(3);
can.increment();
can.clear();
can.decrement();
console.log(can.value);

//LESSON 28

function zoomIn(img) {
    if (img.style.width === '150%') {
      zoomOut(img);
      return;
    }
    img.style.transition = 'all 0.5s ease-in-out';
    img.style.width = '150%';
    img.style.height = '150%';
  }
  
  function zoomOut(img) {
    img.style.transition = 'all 0.5s ease-in-out';
    img.style.width = '100%';
    img.style.height = '100%';
  }

  document.addEventListener('keydown', function(event) {
    var key = event.key.toLowerCase();
    var element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  });




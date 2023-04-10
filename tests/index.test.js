
describe("Sum L23", () => {
        it("Should return 595", () => {
            const result = sum
            expect(result).toBe(595)
        });
    });

describe("MIN & MAX L23", () => {
        it("Should return 10 and 109", () => {
            const resultmin = min
            const resultmax = max
            expect(resultmin).toBe(10)
            expect(resultmax).toBe(109)
        });
    });


describe("Tree L23", () => {
    let treeOutput;
  
    beforeEach(() => {
      treeOutput = "";
    });
  
    it("Should print tree", () => {
      for (let i = 0; i < 5; i++) {
        treeOutput += "#";
        console.log(treeOutput);
      }
      expect(treeOutput).toEqual("#####");
    });
  
  });

describe("Accumulator L26", () => {
    let accumulator;
    let can;
  
    beforeEach(() => {
      accumulator = new Accumulator(5);
      can = new CancelableAccumulator(3);
    });
  
    it("Should increment and decrement", () => {
      accumulator.increment();
      expect(accumulator.value).toEqual(6);
      accumulator.decrement();
      expect(accumulator.value).toEqual(5);
    });
  
    it("Should clear", () => {
      can.increment();
      expect(can.value).toEqual(4);
      can.clear();
      expect(can.value).toEqual(3);
      can.decrement();
      expect(can.value).toEqual(2);
    });
  
  });

describe("Zoom L28", () => {
    let img;
  
    beforeEach(() => {
      img = document.createElement("img");
      img.style.width = "100%";
      img.style.height = "100%";
    });
  
    afterEach(() => {
      img = null;
    });
  
    it("Should zoom in", () => {
      zoomIn(img);
  
      expect(img.style.width).toEqual("150%");
      expect(img.style.height).toEqual("150%");
    });
  
    it("Should zoom out", () => {
      zoomOut(img);
  
      expect(img.style.width).toEqual("100%");
      expect(img.style.height).toEqual("100%");
    });
  
  });

  //З даним варіантом тестування в мене виникли труднощі.
  //Використовував багато варіантів коду для тесту, але всі мені
  //чомусь показують, що умова не виконується. Хоча насправді все 
  //працює. Буду вдячний, якщо допоможете знайти причину)
  
  describe("Scroll L28", () => {
    it("Should scroll to button", () => {
      const element = document.getElementById(key);
      expect(element.scrollIntoView).toEqual({behavior: "smooth", block: "start", inline: "nearest"});
    });
  });





describe("Sum of tow numbers", () => {
    const desc = "<p>Sum of tow numbers</p>";

    describe(desc, () => {
        it("should return 5", () => {
            const result = sum(2, 3);
            expect(result).toBe(5);
        });

        it("should return 0", () => {
            const result = sum(0, 1);
            expect(result).toBe(0);
        });
    });
});
describe("App displays welcome message", () => {
  it("on load", async () => {
    await expect(
      element(by.label("Hello World Application")).atIndex(1)
    ).toBeVisible();
  });
});

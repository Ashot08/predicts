
describe("test examples", () => {
    it("docs search test", async ({browser}) => {
        await browser.openAndWait("https://testplane.io/");

        // Find by tag name
        const navBar = await browser.$("nav");

        // Find by aria-label
        await navBar.$("aria/Search").click();

        // Find by placeholder
        const fileSearchInput = await browser.findByPlaceholderText("Search docs");
        await fileSearchInput.waitForDisplayed();
        await fileSearchInput.setValue("config");

        // Find by id
        const fileSearchResults = await browser.$("#docsearch-list");

        // Find by role
        const fileSearchResultsItems = await fileSearchResults.findAllByRole("option");

        await expect(fileSearchResultsItems.length).toBeGreaterThan(1);
    });
});

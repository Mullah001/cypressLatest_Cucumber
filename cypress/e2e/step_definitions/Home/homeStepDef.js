const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { homePage } from "../../../pages/Home/homePage";

before(() => {
    cy.fixture('Home/home').then((homeData) => {
        this.homeData = homeData;
    })
    cy.fixture('Menu/menu').then((menuData) => {
        this.menuData = menuData;
    });
})

Given("I visit the home page of website", () => {
    homePage.visitHomePage();
});

When("I verify the title of the home page", () => {
    homePage.verifyHomeTitle(this.homeData.title);
});

When("I click on {string} Nav item", (navItem) => {
    homePage.clickNavItem(navItem);
});

Then("I verify the title of the {string} page", (navItem) => {
    homePage.verifyNavTitle(this.menuData.title);
})

Then("I verify the url of {string} page", (navItem) => {
    homePage.verifyURL(this.menuData.url);
})
class HomePage {

    elements = {
        title: () => cy.title(),
        nav: (navItem) => {
            switch (navItem) {
                case 'nav_Menu':
                    return cy.get("a[title='Menu']")
                default:
                    return cy.get("a[title='Stories']")
            }
        },
        url: () => cy.url()
    };

    visitHomePage() {
        cy.visit("/");
    }

    verifyHomeTitle(expectedTitle) {
        this.elements.title().should('eq', expectedTitle)
    }

    clickNavItem(navItem) {
        this.elements.nav(navItem).click();
    }

    verifyNavTitle(expectedTitle) {
        this.elements.title().should('eq', expectedTitle)
    }

    verifyURL(expectedURL) {
        this.elements.url().should('eq', expectedURL)
    }

}

export const homePage = new HomePage();
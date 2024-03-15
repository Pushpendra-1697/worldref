import data from "../../submissionData.json"; // do not create this file

const getAuthStore = (win) => win.store.getState().authReducer;
const getRecipeStore = (win) => win.store.getState().recipeReducer;

data.forEach(({ submission_link: url, id }) => {
    describe("Recipe App", () => {
        beforeEach(() => {
            cy.visit(url);
            Cypress.on("uncaught:exception", (err, runnable) => {
                return false;
            });
            cy.window().its("store").should("exist");
            if (url.charAt(url.length - 1) != "/") {
                url = url + "/";
            }
        });

        // Check for homepage UI and store updation
        it(`Get request should be made for recipe when home page loads`, () => {
            cy.url().should("eq", url);
            cy.server();
            cy.route("GET", "/recipe**").as("request");
            cy.wait("@request").should((xhr) => {
                expect(xhr.status, "successful GET").to.equal(200);
                expect(xhr.url, "get url").to.match(/\/recipe/);
            });
            cy.get("@request").its("response.body").its("length").should("be.eq", 30);
        });

        it(`isLoading should update accordingly while making request`, () => {
            cy.url().should("eq", url);
            cy.server();
            cy.route("GET", "/recipe**").as("request");

            cy.window().then(getRecipeStore).its("isLoading").should("eq", false);

            cy.wait("@request");
            cy.wait(1000).then(() => {
                cy.window().then(getRecipeStore).its("isLoading").should("eq", false);
            });
        });

        it(`Recipe state in store should update when get request made on homepage`, () => {
            cy.url().should("eq", url);
            cy.server();
            cy.route("GET", "/recipe**").as("request");

            cy.window().then(getRecipeStore).its("recipe").should("have.length", 0);

            cy.wait("@request");
            cy.wait(1000);

            cy.window()
                .then(getRecipeStore)
                .its("recipe")
                .its("length")
                .should("eq", 30);
        });

        it(`All recipes should be displayed on home page`, () => {
            cy.get("[data-testid=recipe-list]")
                .children()
                .its("length")
                .should("eq", 30);
            cy.get(".recipe-card").its("length").should("eq", 30);
            cy.get(".recipe-name").eq(1).should("have.text", "Chicken Fried Rice");
            cy.get(".recipe-price").eq(4).should("have.text", 114);
            cy.get(".recipe-type").eq(5).should("have.text", "Type: non-veg");
        });

        // // Check for Authentication

        it(`On Login the store authReducer state should update accordingly`, () => {
            cy.window().then(getAuthStore).its("isAuth").should("equal", false);
            cy.window().then(getAuthStore).its("token").should("equal", "");

            cy.intercept("POST", "**/api/login").as("login");

            cy.visit(`${url}login`);
            cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
            cy.get("[data-testid=user-password]").type("cityslicka");
            cy.get("[data-testid=user-login]").click();

            cy.wait("@login");
            cy.wait(1000);

            cy.window().then(getAuthStore).its("isAuth").should("equal", true);
        });

        it("user is redirected to login page while visiting /recipe/:id, without authentication", () => {
            cy.visit(`${url}recipe/5`).then(() => {
                cy.location("pathname").should("match", /\/login$/);
            });
        });

        it("user is redirected to login page while visiting /recipe/:id, without authentication and should be redirected back to /recipe.:id after login", () => {
            cy.visit(`${url}recipe/5`).then(() => {
                cy.location("pathname").should("match", /\/login$/);
            });
            cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
            cy.get("[data-testid=user-password]").type("cityslicka");
            cy.get("[data-testid=user-login]").click();
            cy.wait(1000);
            cy.url().should("eq", `${url}recipe/5`);
            cy.visit(`${url}recipe/8`).then(() => {
                cy.location("pathname").should("match", /\/login$/);
            });
            cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
            cy.get("[data-testid=user-password]").type("cityslicka");
            cy.get("[data-testid=user-login]").click();
            cy.wait(1000);
            cy.url().should("eq", `${url}recipe/8`);
        });
    });
});
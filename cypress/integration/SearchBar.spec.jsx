describe('Search Bar', () => {
    it('should render search bar', () => {
        cy.visit("/")
        cy.get('*[class^="SearchBar_search_form_input"]').should("exist");
        cy.get('*[class^=SearchBar_search_form_btn]').should("exist");
    });

    describe('onSubmit', () => {
        it('should be able to fetch results based on search term and get movie info',()=>{
            cy.visit("/");
            cy.get('*[class^="SearchBar_search_form_input"]').clear();
            cy.get('*[class^="SearchBar_search_form_input"]').type("Beauty");
            cy.get('*[class^=SearchBar_search_form_btn]').click();
            cy.get('.card-title').contains("Beauty");
            cy.get('.movie-card').eq(0).click();
            cy.get('.card-title').eq(0).then((text1)=>{
                cy.get('.info-title').contains(text1.text());
            })
        });
    });

    describe('movie card when clicked', () => {
        it('should be able to fetch results based on search term and get movie info',()=>{
            cy.visit("/");
            cy.get('*[class^="SearchBar_search_form_input"]').clear();
            cy.get('*[class^="SearchBar_search_form_input"]').type("Beauty");
            cy.get('*[class^=SearchBar_search_form_btn]').click();
            cy.get('.card-title').contains("Beauty");
            cy.get('.movie-card').eq(0).click();
            cy.get('.card-title').eq(0).then((text1)=>{
                cy.get('.info-title').contains(text1.text());
            })
        });
    });



})
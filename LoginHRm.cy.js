export default class loginPage {
    static textLogin(){
        return cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]');
    }

    static inputUsername(){
        return cy.get('[name="username"]');
    }

    static inputPassword(){
        return cy.get('[name="password"]');
    }

    static buttonLogin(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
    }

    static menuDashboard(){
        return cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
    }

    static invalidCredentials(){
        return cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]');
    }
    
    //static resetPassword(){
        //return cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]');
    //}

    //static cancelPassword(){
        //return cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]');
    //}

    static tablogout(){
        return cy.get('[class="oxd-userdropdown-tab"]');
    }

    static LogoutPage(){
        return cy.get('[class="oxd-userdropdown-link"]');
    }
    
    static forgotPassword(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }
    static textReset(){
        return cy.get('[class="orangehrm-forgot-password-container"]');
    }
    static buttonReset(){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]');
    }
    static textSuccesReset(){
        return cy.get('[class="orangehrm-forgot-password-container"]');
    } 
    static buttonCancel(){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]');
    }
    
}
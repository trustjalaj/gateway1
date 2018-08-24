import{element, by, ElementFinder}from 'protractor';

export class ProgramComponentsPage {
createButton = element(by.id('jh-create-entity'));
title = element.all(by.css('jhi-program div h2#page-heading span')).first();

async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ProgramUpdatePage {
    pageTitle = element(by.id('jhi-program-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    programNameInput = element(by.id('field_programName'));
    programDescriptionInput = element(by.id('field_programDescription'));
    programPriceInput = element(by.id('field_programPrice'));
    coursesSelect = element(by.id('field_courses'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setProgramNameInput(programName) {
        await this.programNameInput.sendKeys(programName);
    }

    async getProgramNameInput() {
        return this.programNameInput.getAttribute('value');
    }

    async setProgramDescriptionInput(programDescription) {
        await this.programDescriptionInput.sendKeys(programDescription);
    }

    async getProgramDescriptionInput() {
        return this.programDescriptionInput.getAttribute('value');
    }

    async setProgramPriceInput(programPrice) {
        await this.programPriceInput.sendKeys(programPrice);
    }

    async getProgramPriceInput() {
        return this.programPriceInput.getAttribute('value');
    }

    async coursesSelectLastOption() {
        await this.coursesSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async coursesSelectOption(option) {
        await this.coursesSelect.sendKeys(option);
    }

    getCoursesSelect(): ElementFinder {
        return this.coursesSelect;
    }

    async getCoursesSelectedOption() {
        return this.coursesSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

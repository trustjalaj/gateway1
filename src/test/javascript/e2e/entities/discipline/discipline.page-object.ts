import{element, by, ElementFinder}from 'protractor';

export class DisciplineComponentsPage {
createButton = element(by.id('jh-create-entity'));
title = element.all(by.css('jhi-discipline div h2#page-heading span')).first();

async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class DisciplineUpdatePage {
    pageTitle = element(by.id('jhi-discipline-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    disciplineNameInput = element(by.id('field_disciplineName'));
    disciplineDescriptionInput = element(by.id('field_disciplineDescription'));
    disciplinePriceInput = element(by.id('field_disciplinePrice'));
    programsSelect = element(by.id('field_programs'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setDisciplineNameInput(disciplineName) {
        await this.disciplineNameInput.sendKeys(disciplineName);
    }

    async getDisciplineNameInput() {
        return this.disciplineNameInput.getAttribute('value');
    }

    async setDisciplineDescriptionInput(disciplineDescription) {
        await this.disciplineDescriptionInput.sendKeys(disciplineDescription);
    }

    async getDisciplineDescriptionInput() {
        return this.disciplineDescriptionInput.getAttribute('value');
    }

    async setDisciplinePriceInput(disciplinePrice) {
        await this.disciplinePriceInput.sendKeys(disciplinePrice);
    }

    async getDisciplinePriceInput() {
        return this.disciplinePriceInput.getAttribute('value');
    }

    async programsSelectLastOption() {
        await this.programsSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async programsSelectOption(option) {
        await this.programsSelect.sendKeys(option);
    }

    getProgramsSelect(): ElementFinder {
        return this.programsSelect;
    }

    async getProgramsSelectedOption() {
        return this.programsSelect.element(by.css('option:checked')).getText();
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

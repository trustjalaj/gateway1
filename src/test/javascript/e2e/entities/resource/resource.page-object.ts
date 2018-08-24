import{element, by, ElementFinder}from 'protractor';

export class ResourceComponentsPage {
createButton = element(by.id('jh-create-entity'));
title = element.all(by.css('jhi-resource div h2#page-heading span')).first();

async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ResourceUpdatePage {
    pageTitle = element(by.id('jhi-resource-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    resourceNameInput = element(by.id('field_resourceName'));
    resourceDescriptionInput = element(by.id('field_resourceDescription'));
    resourceURLInput = element(by.id('field_resourceURL'));
    resourcePreviewImageInput = element(by.id('field_resourcePreviewImage'));
    resourceTypeSelect = element(by.id('field_resourceType'));
    weightInput = element(by.id('field_weight'));
    disciplineSelect = element(by.id('field_discipline'));
    programSelect = element(by.id('field_program'));
    courseSelect = element(by.id('field_course'));
    lessonSelect = element(by.id('field_lesson'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setResourceNameInput(resourceName) {
        await this.resourceNameInput.sendKeys(resourceName);
    }

    async getResourceNameInput() {
        return this.resourceNameInput.getAttribute('value');
    }

    async setResourceDescriptionInput(resourceDescription) {
        await this.resourceDescriptionInput.sendKeys(resourceDescription);
    }

    async getResourceDescriptionInput() {
        return this.resourceDescriptionInput.getAttribute('value');
    }

    async setResourceURLInput(resourceURL) {
        await this.resourceURLInput.sendKeys(resourceURL);
    }

    async getResourceURLInput() {
        return this.resourceURLInput.getAttribute('value');
    }

    async setResourcePreviewImageInput(resourcePreviewImage) {
        await this.resourcePreviewImageInput.sendKeys(resourcePreviewImage);
    }

    async getResourcePreviewImageInput() {
        return this.resourcePreviewImageInput.getAttribute('value');
    }

    async setResourceTypeSelect(resourceType) {
        await this.resourceTypeSelect.sendKeys(resourceType);
    }

    async getResourceTypeSelect() {
        return this.resourceTypeSelect.element(by.css('option:checked')).getText();
    }

    async resourceTypeSelectLastOption() {
        await this.resourceTypeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async setWeightInput(weight) {
        await this.weightInput.sendKeys(weight);
    }

    async getWeightInput() {
        return this.weightInput.getAttribute('value');
    }

    async disciplineSelectLastOption() {
        await this.disciplineSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async disciplineSelectOption(option) {
        await this.disciplineSelect.sendKeys(option);
    }

    getDisciplineSelect(): ElementFinder {
        return this.disciplineSelect;
    }

    async getDisciplineSelectedOption() {
        return this.disciplineSelect.element(by.css('option:checked')).getText();
    }

    async programSelectLastOption() {
        await this.programSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async programSelectOption(option) {
        await this.programSelect.sendKeys(option);
    }

    getProgramSelect(): ElementFinder {
        return this.programSelect;
    }

    async getProgramSelectedOption() {
        return this.programSelect.element(by.css('option:checked')).getText();
    }

    async courseSelectLastOption() {
        await this.courseSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async courseSelectOption(option) {
        await this.courseSelect.sendKeys(option);
    }

    getCourseSelect(): ElementFinder {
        return this.courseSelect;
    }

    async getCourseSelectedOption() {
        return this.courseSelect.element(by.css('option:checked')).getText();
    }

    async lessonSelectLastOption() {
        await this.lessonSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async lessonSelectOption(option) {
        await this.lessonSelect.sendKeys(option);
    }

    getLessonSelect(): ElementFinder {
        return this.lessonSelect;
    }

    async getLessonSelectedOption() {
        return this.lessonSelect.element(by.css('option:checked')).getText();
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

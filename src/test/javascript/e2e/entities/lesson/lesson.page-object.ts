import{element, by, ElementFinder}from 'protractor';

export class LessonComponentsPage {
createButton = element(by.id('jh-create-entity'));
title = element.all(by.css('jhi-lesson div h2#page-heading span')).first();

async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class LessonUpdatePage {
    pageTitle = element(by.id('jhi-lesson-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    lessonTitleInput = element(by.id('field_lessonTitle'));
    lessonDescriptionInput = element(by.id('field_lessonDescription'));
    languageSelect = element(by.id('field_language'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setLessonTitleInput(lessonTitle) {
        await this.lessonTitleInput.sendKeys(lessonTitle);
    }

    async getLessonTitleInput() {
        return this.lessonTitleInput.getAttribute('value');
    }

    async setLessonDescriptionInput(lessonDescription) {
        await this.lessonDescriptionInput.sendKeys(lessonDescription);
    }

    async getLessonDescriptionInput() {
        return this.lessonDescriptionInput.getAttribute('value');
    }

    async setLanguageSelect(language) {
        await this.languageSelect.sendKeys(language);
    }

    async getLanguageSelect() {
        return this.languageSelect.element(by.css('option:checked')).getText();
    }

    async languageSelectLastOption() {
        await this.languageSelect
            .all(by.tagName('option'))
            .last()
            .click();
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

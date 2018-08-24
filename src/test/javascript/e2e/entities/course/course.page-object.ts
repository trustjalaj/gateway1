import{element, by, ElementFinder}from 'protractor';

export class CourseComponentsPage {
createButton = element(by.id('jh-create-entity'));
title = element.all(by.css('jhi-course div h2#page-heading span')).first();

async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CourseUpdatePage {
    pageTitle = element(by.id('jhi-course-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    courseTitleInput = element(by.id('field_courseTitle'));
    courseDescriptionInput = element(by.id('field_courseDescription'));
    coursePriceInput = element(by.id('field_coursePrice'));
    courseLevelSelect = element(by.id('field_courseLevel'));
    lessonsSelect = element(by.id('field_lessons'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setCourseTitleInput(courseTitle) {
        await this.courseTitleInput.sendKeys(courseTitle);
    }

    async getCourseTitleInput() {
        return this.courseTitleInput.getAttribute('value');
    }

    async setCourseDescriptionInput(courseDescription) {
        await this.courseDescriptionInput.sendKeys(courseDescription);
    }

    async getCourseDescriptionInput() {
        return this.courseDescriptionInput.getAttribute('value');
    }

    async setCoursePriceInput(coursePrice) {
        await this.coursePriceInput.sendKeys(coursePrice);
    }

    async getCoursePriceInput() {
        return this.coursePriceInput.getAttribute('value');
    }

    async setCourseLevelSelect(courseLevel) {
        await this.courseLevelSelect.sendKeys(courseLevel);
    }

    async getCourseLevelSelect() {
        return this.courseLevelSelect.element(by.css('option:checked')).getText();
    }

    async courseLevelSelectLastOption() {
        await this.courseLevelSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async lessonsSelectLastOption() {
        await this.lessonsSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async lessonsSelectOption(option) {
        await this.lessonsSelect.sendKeys(option);
    }

    getLessonsSelect(): ElementFinder {
        return this.lessonsSelect;
    }

    async getLessonsSelectedOption() {
        return this.lessonsSelect.element(by.css('option:checked')).getText();
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

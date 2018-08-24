import{browser, ExpectedConditions as ec}from 'protractor';
import {NavBarPage, SignInPage}from '../../page-objects/jhi-page-objects';

import {LessonComponentsPage, LessonUpdatePage}from './lesson.page-object';

describe('Lesson e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let lessonUpdatePage: LessonUpdatePage;
    let lessonComponentsPage: LessonComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Lessons', async () => {
        await navBarPage.goToEntity('lesson');
        lessonComponentsPage = new LessonComponentsPage();
        expect(await lessonComponentsPage.getTitle()).toMatch(/gateway1App.lesson.home.title/);
    });

    it('should load create Lesson page', async () => {
        await lessonComponentsPage.clickOnCreateButton();
        lessonUpdatePage = new LessonUpdatePage();
        expect(await lessonUpdatePage.getPageTitle()).toMatch(/gateway1App.lesson.home.createOrEditLabel/);
        await lessonUpdatePage.cancel();
    });

    it('should create and save Lessons', async () => {
        await lessonComponentsPage.clickOnCreateButton();
        await lessonUpdatePage.setLessonTitleInput('lessonTitle');
        expect(await lessonUpdatePage.getLessonTitleInput()).toMatch('lessonTitle');
        await lessonUpdatePage.setLessonDescriptionInput('lessonDescription');
        expect(await lessonUpdatePage.getLessonDescriptionInput()).toMatch('lessonDescription');
        await lessonUpdatePage.languageSelectLastOption();
        await lessonUpdatePage.save();
        expect(await lessonUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});

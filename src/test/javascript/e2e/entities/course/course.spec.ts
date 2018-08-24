import{browser, ExpectedConditions as ec}from 'protractor';
import {NavBarPage, SignInPage}from '../../page-objects/jhi-page-objects';

import {CourseComponentsPage, CourseUpdatePage}from './course.page-object';

describe('Course e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let courseUpdatePage: CourseUpdatePage;
    let courseComponentsPage: CourseComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Courses', async () => {
        await navBarPage.goToEntity('course');
        courseComponentsPage = new CourseComponentsPage();
        expect(await courseComponentsPage.getTitle()).toMatch(/gateway1App.course.home.title/);
    });

    it('should load create Course page', async () => {
        await courseComponentsPage.clickOnCreateButton();
        courseUpdatePage = new CourseUpdatePage();
        expect(await courseUpdatePage.getPageTitle()).toMatch(/gateway1App.course.home.createOrEditLabel/);
        await courseUpdatePage.cancel();
    });

    it('should create and save Courses', async () => {
        await courseComponentsPage.clickOnCreateButton();
        await courseUpdatePage.setCourseTitleInput('courseTitle');
        expect(await courseUpdatePage.getCourseTitleInput()).toMatch('courseTitle');
        await courseUpdatePage.setCourseDescriptionInput('courseDescription');
        expect(await courseUpdatePage.getCourseDescriptionInput()).toMatch('courseDescription');
        await courseUpdatePage.setCoursePriceInput('5');
        expect(await courseUpdatePage.getCoursePriceInput()).toMatch('5');
        await courseUpdatePage.courseLevelSelectLastOption();
        // courseUpdatePage.lessonsSelectLastOption();
        await courseUpdatePage.save();
        expect(await courseUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});

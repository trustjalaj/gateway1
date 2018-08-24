import{browser, ExpectedConditions as ec}from 'protractor';
import {NavBarPage, SignInPage}from '../../page-objects/jhi-page-objects';

import {ProgramComponentsPage, ProgramUpdatePage}from './program.page-object';

describe('Program e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let programUpdatePage: ProgramUpdatePage;
    let programComponentsPage: ProgramComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Programs', async () => {
        await navBarPage.goToEntity('program');
        programComponentsPage = new ProgramComponentsPage();
        expect(await programComponentsPage.getTitle()).toMatch(/gateway1App.program.home.title/);
    });

    it('should load create Program page', async () => {
        await programComponentsPage.clickOnCreateButton();
        programUpdatePage = new ProgramUpdatePage();
        expect(await programUpdatePage.getPageTitle()).toMatch(/gateway1App.program.home.createOrEditLabel/);
        await programUpdatePage.cancel();
    });

    it('should create and save Programs', async () => {
        await programComponentsPage.clickOnCreateButton();
        await programUpdatePage.setProgramNameInput('programName');
        expect(await programUpdatePage.getProgramNameInput()).toMatch('programName');
        await programUpdatePage.setProgramDescriptionInput('programDescription');
        expect(await programUpdatePage.getProgramDescriptionInput()).toMatch('programDescription');
        await programUpdatePage.setProgramPriceInput('5');
        expect(await programUpdatePage.getProgramPriceInput()).toMatch('5');
        // programUpdatePage.coursesSelectLastOption();
        await programUpdatePage.save();
        expect(await programUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});

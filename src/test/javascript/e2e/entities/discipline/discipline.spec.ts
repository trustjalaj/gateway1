import{browser, ExpectedConditions as ec}from 'protractor';
import {NavBarPage, SignInPage}from '../../page-objects/jhi-page-objects';

import {DisciplineComponentsPage, DisciplineUpdatePage}from './discipline.page-object';

describe('Discipline e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let disciplineUpdatePage: DisciplineUpdatePage;
    let disciplineComponentsPage: DisciplineComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Disciplines', async () => {
        await navBarPage.goToEntity('discipline');
        disciplineComponentsPage = new DisciplineComponentsPage();
        expect(await disciplineComponentsPage.getTitle()).toMatch(/gateway1App.discipline.home.title/);
    });

    it('should load create Discipline page', async () => {
        await disciplineComponentsPage.clickOnCreateButton();
        disciplineUpdatePage = new DisciplineUpdatePage();
        expect(await disciplineUpdatePage.getPageTitle()).toMatch(/gateway1App.discipline.home.createOrEditLabel/);
        await disciplineUpdatePage.cancel();
    });

    it('should create and save Disciplines', async () => {
        await disciplineComponentsPage.clickOnCreateButton();
        await disciplineUpdatePage.setDisciplineNameInput('disciplineName');
        expect(await disciplineUpdatePage.getDisciplineNameInput()).toMatch('disciplineName');
        await disciplineUpdatePage.setDisciplineDescriptionInput('disciplineDescription');
        expect(await disciplineUpdatePage.getDisciplineDescriptionInput()).toMatch('disciplineDescription');
        await disciplineUpdatePage.setDisciplinePriceInput('5');
        expect(await disciplineUpdatePage.getDisciplinePriceInput()).toMatch('5');
        // disciplineUpdatePage.programsSelectLastOption();
        await disciplineUpdatePage.save();
        expect(await disciplineUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});

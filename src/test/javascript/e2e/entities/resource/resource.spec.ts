import{browser, ExpectedConditions as ec}from 'protractor';
import {NavBarPage, SignInPage}from '../../page-objects/jhi-page-objects';

import {ResourceComponentsPage, ResourceUpdatePage}from './resource.page-object';

describe('Resource e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let resourceUpdatePage: ResourceUpdatePage;
    let resourceComponentsPage: ResourceComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Resources', async () => {
        await navBarPage.goToEntity('resource');
        resourceComponentsPage = new ResourceComponentsPage();
        expect(await resourceComponentsPage.getTitle()).toMatch(/gateway1App.resource.home.title/);
    });

    it('should load create Resource page', async () => {
        await resourceComponentsPage.clickOnCreateButton();
        resourceUpdatePage = new ResourceUpdatePage();
        expect(await resourceUpdatePage.getPageTitle()).toMatch(/gateway1App.resource.home.createOrEditLabel/);
        await resourceUpdatePage.cancel();
    });

    it('should create and save Resources', async () => {
        await resourceComponentsPage.clickOnCreateButton();
        await resourceUpdatePage.setResourceNameInput('resourceName');
        expect(await resourceUpdatePage.getResourceNameInput()).toMatch('resourceName');
        await resourceUpdatePage.setResourceDescriptionInput('resourceDescription');
        expect(await resourceUpdatePage.getResourceDescriptionInput()).toMatch('resourceDescription');
        await resourceUpdatePage.setResourceURLInput('resourceURL');
        expect(await resourceUpdatePage.getResourceURLInput()).toMatch('resourceURL');
        await resourceUpdatePage.setResourcePreviewImageInput('resourcePreviewImage');
        expect(await resourceUpdatePage.getResourcePreviewImageInput()).toMatch('resourcePreviewImage');
        await resourceUpdatePage.resourceTypeSelectLastOption();
        await resourceUpdatePage.setWeightInput('5');
        expect(await resourceUpdatePage.getWeightInput()).toMatch('5');
        await resourceUpdatePage.disciplineSelectLastOption();
        await resourceUpdatePage.programSelectLastOption();
        await resourceUpdatePage.courseSelectLastOption();
        await resourceUpdatePage.lessonSelectLastOption();
        await resourceUpdatePage.save();
        expect(await resourceUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});

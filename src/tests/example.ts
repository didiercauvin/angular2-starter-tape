import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import * as test from 'tape';

import { AboutComponent } from '../app/about/about.component';

let fixture: ComponentFixture<AboutComponent>;
let component: AboutComponent;
 
test('setup', assert => {

    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
        
    TestBed.configureTestingModule({declarations: [
            AboutComponent
        ]})
    .compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        
        assert.end();
    });

});

test('A passing test', assert => {

    assert.pass('This test will pass.');
    assert.end();

});

test('welcome component should have a page title', assert => {
    
    assert.equal(component.pageTitle, "Hello About Component");
    assert.end();

});
package com.jalaj.gateway.cucumber.stepdefs;

import com.jalaj.gateway.Gateway1App;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = Gateway1App.class)
public abstract class StepDefs {

    protected ResultActions actions;

}

Feature: B.1.2 - IndieAuth to other sites

IndieAuth allows you to authenticate into websites by linking
an existing authentication provider to your domain.

Scenario: Login to indieweb.org wiki using Indieauth

Given I have set up my website to include rels
When I log in to the indieweb.org wiki
Then I am authenticated into the indieweb.org wiki

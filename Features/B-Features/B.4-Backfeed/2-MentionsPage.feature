Feature: B.4.2 - Mentions Page

----

In order to easily see when people have mentioned me

As an IndieWebber

I want to have a page that contains all of my @-mentions.

----

See: [indieweb.org/mentions](https://indieweb.org/mentions).

![](/home/neil/Code/doubleloop-specs/tests/_output/debug/mentions.png)

Scenario: Navigating to mentions page
  Given I am browsing my website
  When I navigate to "/mentions"
  Then I should see a list of my mentions

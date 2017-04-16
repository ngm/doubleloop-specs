Feature: B.4.2 - Mentions Page

----

In order to easily see when people have mentioned me

As an IndieWebber

I want to have a page that contains all of my @-mentions.

----

A *mentions* page lists webmentions sent to a website. 

See: [indieweb.org/mentions](https://indieweb.org/mentions).

![](./images/mentions.png)

Scenario: Navigating to mentions page
  Given I am browsing my website
  When I navigate to "/mentions"
  Then I should see a list of my mentions

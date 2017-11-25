@current
Feature: B.2.1 - Publish Note

----

In order to capture my thoughts

As an IndieWebber

I want to be able to post notes to my website.

----

A note is a post that is typically short unstructured plain text, written &
posted quickly, that has its own permalink page.

See: [indieweb.org/note](https://indieweb.org/note).

Scenario: Publish note

Given I have created a note on my site
When a visitor views the note
Then it appears correctly as a note
#And it is marked up correctly as a note

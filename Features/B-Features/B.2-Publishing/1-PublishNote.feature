Feature: Publish Note

----

In order to capture my thoughts

As an IndieWebber

I want to be able to post notes to my website.

----

A note is a post that is typically short unstructured* plain text, written &
posted quickly, that has its own permalink page.

See: [indieweb.org/note](indieweb.org/note).

Scenario: Publish note

Given I am logged in to my site
When I publish a note with the text 'This is my note!':
Then it appears correctly as a note
And it is marked up correctly as a note

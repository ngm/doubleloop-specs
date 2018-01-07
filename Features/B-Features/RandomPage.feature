Feature: Random page

* Goal: allow me to easily review and evolve the things I'm interested in
* Capability: making varied topics easily discoverable
* Capability: editing tags of previous posts
* Capability: microtasking to improve content

Having a random page makes it simple (and fun!) to surface old content, review it,
and fix anything with it if necessary (most likely, that it is missing tags.)


@current
Scenario: No posts, navigating to random page URL
When I navigate to the random page URL
Then I should be alerted that there are no posts

Scenario: One post, navigating to random page URL
Given there is one post
When I navigate to the random page URL
Then I should be shown that one post

Scenario: Multiple posts, navigating to random page URL
Given there are multiple posts
When I navigate to the random page URL multiple times
Then I should see a statistically random spread of those posts

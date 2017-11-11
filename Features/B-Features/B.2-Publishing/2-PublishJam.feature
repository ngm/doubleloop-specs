Feature: B.2.2 - Publish jams

----

As a music fan,

In order to remember and share the tracks that I love,

I want to be able to publish the tracks that I love.

----

The microformats currently look like this...
![Jam Microformats Screenshot](./jam-microformats.png)

The website output currently looks something like this...
![Jam Screenshot](./jam-screenshot.png)


Scenario: Post basic jam details
# TODO: visual diff on page screenshot to test that the visuals look OK.

# Ignore this for now - assuming jam has already been posted
#When I publish a jam with the following details:
#| artist          | track name      | playable-link                               |
#| casino vs japan | it's very sunny | https://www.youtube.com/watch?v=zVwyB3nhwws |
When I navigate to "/2017/11/05/sunny-casino-versus-japan/"
Then the jam appears and looks OK


Scenario: Post jam with microformats
# TODO: Test that the data seems OK.

# Ignoring posting for now - assuming jam has already been posted
When I navigate to "/2017/11/05/sunny-casino-versus-japan/"
Then the name "Casino Versus Japan" appears in the hcite author pname
# And the track name "It's Very Sunny" appears in the hcite pname


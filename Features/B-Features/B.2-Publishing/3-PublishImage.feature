@current
Feature: Publish images
  
A photo is a post whose primary content is a photograph or other image, with an
optional caption. With multiple photographs it becomes a multi-photo post.
See [indieweb.org/photo](https://indieweb.org/photo).

There are different approaches to posting photos. e.g.

- As a note with a primary image
- As an image, with text (caption) only following 
  - the image is the focus of the post, and text is in service of the image. 

I'm interested in the latter.

#Scenario: Publish a photo
#When I browse to the photo entry
# it should look correct on various screen sizes!
#Then the photo entry should look correct


Scenario: Publish a photo and check microformats
When I navigate to "/2017/11/11/rainbow-street/"
Then the entry should be marked as an h-entry
And the h-entry should contain a u-photo class
# h-entry, with a u-photo in there somewhere.
# calum has a p-name and a p-image
# doesn't seem to be too much consensus around how to markup the caption in an image post.
# marty mcguire also has p-name for the caption
# e-content also in there

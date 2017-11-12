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

Steps needed to get this to work:

- create a new post
- set kind to 'photo' (assumes have post kinds plugin installed)
- set format to 'image'
- 'Add Media' via the edit toolbar
- select 'Link To' as 'Media File'
- expand 'Advanced Options' and set Image CSS Class to 'u-photo'

#Scenario: Publish a photo
#When I browse to the photo entry
# it should look correct on various screen sizes!
#Then the photo entry should look correct


Scenario: Publish a photo and check microformats
When I navigate to "/2017/11/11/rainbow-street/"
Then the entry should be marked as an h-entry
And the h-entry should have a name property "Rainbow Street"
And the h-entry should contain a u-photo class
# And it should link to a larger version of the file?
# what about the caption?

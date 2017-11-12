jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "B-Features/B.5-Homepage/1-Homepage.feature",
      "Feature": {
        "Name": "Homepage",
        "Description": "",
        "FeatureElements": [],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "B-Features/B.4-Backfeed/2-MentionsPage.feature",
      "Feature": {
        "Name": "B.4.2 - Mentions Page",
        "Description": "----\n\nIn order to easily see when people have mentioned me\n\nAs an IndieWebber\n\nI want to have a page that contains all of my @-mentions.\n\n----\n\nA *mentions* page lists webmentions sent to a website. \n\nSee: [indieweb.org/mentions](https://indieweb.org/mentions).\n\n![](./images/mentions.png)",
        "FeatureElements": [
          {
            "Name": "Navigating to mentions page",
            "Slug": "navigating-to-mentions-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am browsing my website",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I navigate to \"/mentions\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see a list of my mentions",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "B-Features/B.4-Backfeed/1-BackfeedFromTwitter.feature",
      "Feature": {
        "Name": "B.4.1 - Backfeed from Twitter",
        "Description": "----\n\nIn order to be part of a community discussion\n\nAs an IndieWebber\n\nI want interactions with my notes on Twitter to be returned to my site\n\n----",
        "FeatureElements": [],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "B-Features/B.3-POSSEing/1-PosseNoteToTwitter.feature",
      "Feature": {
        "Name": "B.3.1 - POSSEing a note to Twitter",
        "Description": "----\n\nIn order to get my notes noticed and commented upon,\n\nAs an IndieWebber,\n\nI want to syndicate the notes I publish on my site to Twitter.\n\n----",
        "FeatureElements": [
          {
            "Name": "Publishing a note syndicates it to Twitter",
            "Slug": "publishing-a-note-syndicates-it-to-twitter",
            "Description": "Given",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I publish a note to my site",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "it is syndicated to Twitter",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "B-Features/B.2-Publishing/3-PublishImage.feature",
      "Feature": {
        "Name": "Publish images",
        "Description": "A photo is a post whose primary content is a photograph or other image, with an\noptional caption. With multiple photographs it becomes a multi-photo post.\nSee [indieweb.org/photo](https://indieweb.org/photo).\n\nThere are different approaches to posting photos. e.g.\n\n- As a note with a primary image\n- As an image, with text (caption) only following \n  - the image is the focus of the post, and text is in service of the image. \n\nI'm interested in the latter.\n\nSteps needed to get this to work:\n\n- create a new post\n- set kind to 'photo' (assumes have post kinds plugin installed)\n- set format to 'image'\n- 'Add Media' via the edit toolbar\n- select 'Link To' as 'Media File'\n- expand 'Advanced Options' and set Image CSS Class to 'u-photo'",
        "FeatureElements": [
          {
            "Name": "Publish a photo and check microformats",
            "Slug": "publish-a-photo-and-check-microformats",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I navigate to \"/2017/11/11/rainbow-street/\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the entry should be marked as an h-entry",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the h-entry should have a name property \"Rainbow Street\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the h-entry should contain a u-photo class",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "# And it should link to a larger version of the file?"
                  },
                  {
                    "Text": "# what about the caption?"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@current"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "B-Features/B.2-Publishing/2-PublishJam.feature",
      "Feature": {
        "Name": "B.2.2 - Publish jams",
        "Description": "----\n\nAs a music fan,\n\nIn order to remember and share the tracks that I love,\n\nI want to be able to publish the tracks that I love.\n\n----\n\nThe microformats currently look like this...\n![Jam Microformats Screenshot](./jam-microformats.png)\n\nThe website output currently looks something like this...\n![Jam Screenshot](./jam-screenshot.png)",
        "FeatureElements": [
          {
            "Name": "Post basic jam details",
            "Slug": "post-basic-jam-details",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I navigate to \"/2017/11/05/sunny-casino-versus-japan/\"",
                "StepComments": [
                  {
                    "Text": "# TODO: visual diff on page screenshot to test that the visuals look OK."
                  },
                  {
                    "Text": "# Ignore this for now - assuming jam has already been posted"
                  },
                  {
                    "Text": "#When I publish a jam with the following details:"
                  },
                  {
                    "Text": "#| artist          | track name      | playable-link                               |"
                  },
                  {
                    "Text": "#| casino vs japan | it's very sunny | https://www.youtube.com/watch?v=zVwyB3nhwws |"
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the jam appears and looks OK",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Post jam with microformats",
            "Slug": "post-jam-with-microformats",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I navigate to \"/2017/11/05/sunny-casino-versus-japan/\"",
                "StepComments": [
                  {
                    "Text": "# TODO: Test that the data seems OK."
                  },
                  {
                    "Text": "# Ignoring posting for now - assuming jam has already been posted"
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the name \"Casino Versus Japan\" appears in the hcite author pname",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "# And the track name \"It's Very Sunny\" appears in the hcite pname"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "B-Features/B.2-Publishing/1-PublishNote.feature",
      "Feature": {
        "Name": "B.2.1 - Publish Note",
        "Description": "----\n\nIn order to capture my thoughts\n\nAs an IndieWebber\n\nI want to be able to post notes to my website.\n\n----\n\nA note is a post that is typically short unstructured plain text, written &\nposted quickly, that has its own permalink page.\n\nSee: [indieweb.org/note](https://indieweb.org/note).",
        "FeatureElements": [
          {
            "Name": "Publish note",
            "Slug": "publish-note",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am logged in to my site",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I publish a note with the text 'This is my note!'",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "it appears correctly as a note",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "it is marked up correctly as a note",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "B-Features/B.1-Authentication/2-IndieAuthToOtherSites.feature",
      "Feature": {
        "Name": "B.1.2 - IndieAuth to other sites",
        "Description": "IndieAuth allows you to authenticate into websites by linking\nan existing authentication provider to your domain.",
        "FeatureElements": [
          {
            "Name": "Login to indieweb.org wiki using Indieauth",
            "Slug": "login-to-indieweborg-wiki-using-indieauth",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have set up my website to include rels",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I log in to the indieweb.org wiki",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am authenticated into the indieweb.org wiki",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "B-Features/B.1-Authentication/1-IndieAuthToOwnSite.feature",
      "Feature": {
        "Name": "B.1.1 - IndieAuth to own site",
        "Description": "----\n\nIn order to ... ?\n\nAs an Indiewebber\n\nI want to be able to log in to my own site using my own domain\n\n\n----",
        "FeatureElements": [],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "A-Overview/4-Glossary.feature",
      "Feature": {
        "Name": "A.4 - Glossary",
        "Description": "**POSSE**: Publish On your own Site, Syndicate Elsewhere.",
        "FeatureElements": [],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "A-Overview/3-Capabilities.feature",
      "Feature": {
        "Name": "A.3 - Capabilities",
        "Description": "See: \n[/building-blocks](http://indieweb.org/building-blocks),\n[/IndieMark](https://indieweb.org/IndieMark),\n[indiewebify.me](https://indiewebify.me/).\n\n* POSSE\n* Micropub\n* Webmention\n* Backfeed",
        "FeatureElements": [],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "A-Overview/2-Goals.feature",
      "Feature": {
        "Name": "A.2 - Goals",
        "Description": "* Reduce usage of silos\n\n* Increase ownership of my own data\n\n* Increase knowledge creation\n\n* Participate in growth of indieweb movement\n\n* Increase level of discussion of ideas",
        "FeatureElements": [],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "A-Overview/1-Vision.feature",
      "Feature": {
        "Name": "A.1 - Vision",
        "Description": "The aim of implementing doubleloop.net using indieweb principles is\nin order to own my own thoughts and actions on the web.",
        "FeatureElements": [],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@current",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "Folders": [
      {
        "Folder": "B-Features/B.5-Homepage/1-Homepage.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.4-Backfeed/2-MentionsPage.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "B-Features/B.4-Backfeed/1-BackfeedFromTwitter.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.3-POSSEing/1-PosseNoteToTwitter.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "B-Features/B.2-Publishing/3-PublishImage.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "B-Features/B.2-Publishing/2-PublishJam.feature",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Folder": "B-Features/B.2-Publishing/1-PublishNote.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "B-Features/B.1-Authentication/2-IndieAuthToOtherSites.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "B-Features/B.1-Authentication/1-IndieAuthToOwnSite.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "A-Overview/4-Glossary.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "A-Overview/3-Capabilities.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "A-Overview/2-Goals.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "A-Overview/1-Vision.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "B-Features/B.5-Homepage/1-Homepage.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.4-Backfeed/2-MentionsPage.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.4-Backfeed/1-BackfeedFromTwitter.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.3-POSSEing/1-PosseNoteToTwitter.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.2-Publishing/3-PublishImage.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.2-Publishing/2-PublishJam.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.2-Publishing/1-PublishNote.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.1-Authentication/2-IndieAuthToOtherSites.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "B-Features/B.1-Authentication/1-IndieAuthToOwnSite.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "A-Overview/4-Glossary.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "A-Overview/3-Capabilities.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "A-Overview/2-Goals.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "A-Overview/1-Vision.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 7,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 7
    },
    "Features": {
      "Total": 13,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 13
    }
  },
  "Configuration": {
    "SutName": "doubleloop.net",
    "GeneratedOn": "12 November 2017 12:15:17"
  }
});
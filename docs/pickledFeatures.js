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
        "Description": "----\n\nIn order to easily see when people have mentioned me\n\nAs an IndieWebber\n\nI want to have a page that contains all of my @-mentions.\n\n----\n\nSee: [indieweb.org/mentions](https://indieweb.org/mentions).\n\n![](/home/neil/Code/doubleloop-specs/tests/_output/debug/mentions.png)",
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
        "Description": "* POSSE\n* Micropub\n* Webmention\n* Backfeed\n* etc - read through some of indieweb.org for more features (make sure they align with goals)",
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
    "Tags": [],
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
      "Total": 4,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 4
    },
    "Features": {
      "Total": 11,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 11
    }
  },
  "Configuration": {
    "SutName": "doubleloop.net",
    "GeneratedOn": "16 April 2017 22:34:02"
  }
});
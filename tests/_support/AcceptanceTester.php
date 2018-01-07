<?php

require __DIR__ . '/../../vendor/autoload.php';

/**
 * Inherited Methods
 * @method void wantToTest($text)
 * @method void wantTo($text)
 * @method void execute($callable)
 * @method void expectTo($prediction)
 * @method void expect($prediction)
 * @method void amGoingTo($argumentation)
 * @method void am($role)
 * @method void lookForwardTo($achieveValue)
 * @method void comment($description)
 * @method \Codeception\Lib\Friend haveFriend($name, $actorClass = NULL)
 *
 * @SuppressWarnings(PHPMD)
 */
class AcceptanceTester extends \Codeception\Actor
{
    use _generated\AcceptanceTesterActions;

    var $post_id = -1;

    /**
     * Define custom actions here
     */

    /**
     * @Given I am logged in to my site
     */
    public function iAmLoggedInToMySite()
    {
        throw new \Codeception\Exception\Incomplete("Step `I am logged in to my site` is not defined");
    }

    /**
     * @When I publish a note with the text 'This is my note!':
     */
    public function iPublishANoteWithTheTextThisIsMyNote()
    {
        throw new \Codeception\Exception\Incomplete("Step `I publish a note with the text 'This is my note!':` is not defined");
    }

    /**
     * @Then it is marked up correctly as a note
     */
    public function itIsMarkedUpCorrectlyAsANote()
    {
        throw new \Codeception\Exception\Incomplete("Step `it is marked up correctly as a note` is not defined");
    }

    /**
     * @Given I am browsing my website
     */
    public function iAmBrowsingMyWebsite()
    {
    }

    /**
     * @When I navigate to :page
     */
    public function iNavigateToPage($page)
    {
        $this->amOnPage($page);
    }

    /**
     * @Then I should see a list of my mentions
     */
    public function iShouldSeeAListOfMyMentions()
    {
        //$this->see('mentions');
        //$this->makeScreenshot("mentions");
    }

    /**
     * @Then the jam appears and looks OK
     */
    public function theJamAppearsOnMyWebsite()
    {
        $this->see('Casino Versus Japan');
        $this->see('It\'s Very Sunny');
        $this->makeScreenshot("jam-actual");
    }

    /**
     * @Then the name :name appears in the hcite hcard pname
     */
    public function jamMicroformats($name)
    {
        $parser = new Mf2\Parser(file_get_contents($this->getCurrentUrl()));
        $mf_array = $parser->parseFromId('post-314')['items'];
        $hcite = $mf_array[0];
        $author_hcard = $hcite['properties']['author'][0];
        $this->assertTrue($author_hcard['type'][0] == 'h-card');
        $this->assertTrue($author_hcard['properties']['name'][0] == $name);
    }

    /**
     * @Then the entry should be marked as an h-entry
     */
    public function shouldBeMarkedAsAnHentry()
    {
        $parser = new Mf2\Parser($this->grabPageSource());
        //$h_entry = $parser->query("//*[contains(@class, 'h-entry')]")[0];
        $mf = $parser->parse();
        $h_entry = BarnabyWalters\Mf2\findMicroformatsByType($mf, 'h-entry');
        $this->assertNotNull($h_entry);
    }

    /**
     * @Then the h-entry should have a name property :name
     */
    public function hEntryShouldHaveNameProperty($name)
    {
        $parser = new Mf2\Parser($this->grabPageSource());
        $mf = $parser->parse();
        $h_entry = BarnabyWalters\Mf2\findMicroformatsByType($mf, 'h-entry')[0];
        $this->assertEquals(BarnabyWalters\Mf2\getPlaintext($h_entry, 'name'), $name);
    }

    /**
     * @Then the h-entry should contain a u-photo class
     */
    public function hEntryShouldContainUPhoto()
    {
        $parser = new Mf2\Parser($this->grabPageSource());
        $mf = $parser->parse();
        $h_entry = BarnabyWalters\Mf2\findMicroformatsByType($mf, 'h-entry')[0];
        $this->assertTrue(BarnabyWalters\Mf2\hasProp($h_entry, 'photo'));
    }

    /**
     * @Then the photo entry should look correct
     */
    public function thePhotoEntryShouldLookCorrect()
    {
        // TODO: using whole page, as if you focus in on say #content,
        // you don't see what's in the the '::before' pseudo-element.
        // Need to a workaround.
        $this->dontSeeVisualChanges("photo-entry", "html");
    }

    /**
     * @Given I have created a note on my site
     */
    public function haveCreatedANoteOnMySite()
    {
        $kind_note_term_id = 18;
        $post_format_aside_term_id = 33;
        $this->post_id = $this->havePostInDatabase( [ 'post_name' => 'foo', 'post_content' => 'hello world!', 'post_title' => '' ] );
        $this->haveTermRelationshipInDatabase($this->post_id, $kind_note_term_id);
        $this->haveTermRelationshipInDatabase($this->post_id, $post_format_aside_term_id);
    }

    /**
     * @When a visitor views the note
     */
    public function visitorViewsTheNote()
    {
        $this->amOnPage( '/?p=' . $this->post_id );
    }

    /**
     * @Then it appears correctly as a note
     */
    public function appearsCorrectlyAsANote()
    {
        $this->makeScreenshot('note-view');
    }

    /**
     * @Given I have set up my website to include rels
     */
    public function iHaveSetUpMyWebsiteToIncludeRels()
    {
        throw new \Codeception\Exception\Incomplete("Step `I have set up my website to include rels` is not defined");
    }

    /**
     * @When I log in to the indieweb:num1org wiki
     */
    public function iLogInToTheIndieweborgWiki($num1)
    {
        throw new \Codeception\Exception\Incomplete("Step `I log in to the indieweb:num1org wiki` is not defined");
    }

    /**
     * @Then I am authenticated into the indieweb:num1org wiki
     */
    public function iAmAuthenticatedIntoTheIndieweborgWiki($num1)
    {
        throw new \Codeception\Exception\Incomplete("Step `I am authenticated into the indieweb:num1org wiki` is not defined");
    }

    /**
     * @Then the name :arg1 appears in the hcite author pname
     */
    public function theNameAppearsInTheHciteAuthorPname($arg1)
    {
        throw new \Codeception\Exception\Incomplete("Step `the name :arg1 appears in the hcite author pname` is not defined");
    }

    /**
     * @When I publish a note to my site
     */
    public function iPublishANoteToMySite()
    {
        throw new \Codeception\Exception\Incomplete("Step `I publish a note to my site` is not defined");
    }

    /**
     * @Then it is syndicated to Twitter
     */
    public function itIsSyndicatedToTwitter()
    {
        throw new \Codeception\Exception\Incomplete("Step `it is syndicated to Twitter` is not defined");
    }

    /**
     * @Given there are no posts
     */
    public function thereAreNoPosts()
    {
        throw new \Codeception\Exception\Incomplete("Step `there are no posts` is not defined");
    }

    /**
     * @When I navigate to the random page URL
     */
    public function iNavigateToTheRandomPageURL()
    {
        $this->amOnPage('/random');
    }

    /**
     * @Then I should be alerted that there are no posts
     */
    public function iShouldBeAlertedThatThereAreNoPosts()
    {
        $this->see("This site has no posts!");
    }

    /**
     * @Given there is one post
     */
    public function thereIsOnePost()
    {
        throw new \Codeception\Exception\Incomplete("Step `there is one post` is not defined");
    }

    /**
     * @Then I should be shown that one post
     */
    public function iShouldBeShownThatOnePost()
    {
        throw new \Codeception\Exception\Incomplete("Step `I should be shown that one post` is not defined");
    }

    /**
     * @Given there are multiple posts
     */
    public function thereAreMultiplePosts()
    {
        throw new \Codeception\Exception\Incomplete("Step `there are multiple posts` is not defined");
    }

    /**
     * @When I navigate to the random page URL multiple times
     */
    public function iNavigateToTheRandomPageURLMultipleTimes()
    {
        throw new \Codeception\Exception\Incomplete("Step `I navigate to the random page URL multiple times` is not defined");
    }

    /**
     * @Then I should see a statistically random spread of those posts
     */
    public function iShouldSeeAStatisticallyRandomSpreadOfThosePosts()
    {
        throw new \Codeception\Exception\Incomplete("Step `I should see a statistically random spread of those posts` is not defined");
    }
}

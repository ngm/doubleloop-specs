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
     * @Then it appears correctly as a note
     */
    public function itAppearsCorrectlyAsANote()
    {
        throw new \Codeception\Exception\Incomplete("Step `it appears correctly as a note` is not defined");
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
}

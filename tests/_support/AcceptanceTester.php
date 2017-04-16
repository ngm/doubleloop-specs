<?php


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
    public function iNavigateTomentions($page)
    {
        $this->amOnPage($page);
    }

    /**
     * @Then I should see a list of my mentions
     */
    public function iShouldSeeAListOfMyMentions()
    {
        $this->see('mentions');
        $this->makeScreenshot("mentions");
    }
}

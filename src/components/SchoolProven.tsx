import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import GlobalNav from "./GlobalNav";

export default function SchoolProven() {
  const renderSection = (title: string, content: JSX.Element) => (
    <>
      <h2>{title}</h2>
      {content}
    </>
  );

  const renderCarousel = (imageSources: any[]) => (
    <Carousel>
      {imageSources.map((imageSource) => (
        <Carousel.Item>
          <div className="Carousel-Image-Container">
            <Image className="Carousel-Image" src={imageSource} fluid rounded />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const background = renderSection(
    "Background",
    <p>
      Taking college classes is already hard so why does it feel just as hard
      trying to figure out which classes to take in the first place? Some
      students will blindly take classes that fulfill their requirements without
      accounting for the workload of each class, resulting in being overwhelmed
      with assignments. Other students will ask their senior friends for
      guidance and advice on which classes to take (or which to avoid), which
      could help them avoid making a costly mistake. Then there are the students
      that take matters into their own hands and research the different options
      they have by using any resource available to them. There are many tools
      available to aid students in their quest of choosing next quarter’s
      classes. Some of the more popular ones include RateMyProfessor,
      college-specific subreddits on Reddit, and college-provided tools such as
      Course and Professor Evaluations (CAPEs) at UCSD. However, the information
      students need to get a holistic picture of a specific class is often
      fragmented across several platforms. This leads to students having to sift
      through different sites and multiple tabs just to research one class.
      Thus, trying to choose your schedule for the next quarter can often feel
      just as overwhelming as completing classwork for the current quarter.
    </p>
  );

  const overview = renderSection(
    "Overview",
    <p>
      I completed this group project with two other students as part of an
      Interaction Design class at UCSD. Through this project, I learned how to
      apply the design process to find unmet needs, prototype possible
      solutions, get feedback, and iterate to develop a useful mobile app.
      SchoolProven is the result of this ten week sprint. This mobile web app
      aims to provide students with an all-in-one platform to research their
      upcoming classes with information and data they can trust. I was primarily
      responsible for development, managing infrastructure for hosting the app,
      deployment, and prioritization of new features. Additionally, I
      contributed to the initial prototyping and user testing.
    </p>
  );

  const problemStatement = renderSection(
    "Problem Statement",
    <p>
      Students need a way to easily research classes to take for the upcoming
      term in order to focus more time on the current term’s classwork and have
      a future schedule with a reasonable workload.
    </p>
  );

  const zacharyPersona = (
    <Col>
      <b>Zachary</b>
      <p>Description</p>
      <ul>
        <li>Age: 21</li>
        <li>Class Standing: Junior</li>
        <li>Major: Human Biology</li>
      </ul>
      <p>Goals</p>
      <ul>
        <li>Find a good job after graduation</li>
        <li>Maintain his 3.89 GPA</li>
        <li>
          Continue to be a full-time student while also working a part-time
          internship
        </li>
      </ul>
      <p>Concerns</p>
      <ul>
        <li>
          The workload for his classes will be too much to allow him to continue
          his internship
        </li>
        <li>
          He might take a hit in his GPA or the quality of work in his
          internship
        </li>
      </ul>
    </Col>
  );

  const maddiePersona = (
    <Col>
      <b>Maddie</b>
      <p>Description</p>
      <ul>
        <li>Age: 18</li>
        <li>Class Standing: Freshman</li>
        <li>Major: Cognitive Science</li>
      </ul>
      <p>Goals</p>
      <ul>
        <li>Take classes that pique her interests</li>
        <li>Balance classes and extracurricular activities</li>
      </ul>
      <p>Concerns</p>
      <ul>
        <li>
          Courses have vague titles that make it difficult to gauge whether she
          will end up liking the material
        </li>
        <li>
          She is unsure what the course load is like for different classes and
          if she’ll be able to manage participating in all the clubs she’s
          interested in
        </li>
      </ul>
    </Col>
  );

  const userPersonas = renderSection(
    "User Personas",
    <Row>
      {zacharyPersona}
      {maddiePersona}
    </Row>
  );

  const competitiveAudit = renderSection(
    "Competitive Audit",
    <Image
      src={require("../img/SchoolProven/CompetitiveAudit.png")}
      fluid
      rounded
    />
  );

  const storyboards = renderSection(
    "Storyboards",
    renderCarousel([
      require("../img/SchoolProven/Storyboards/Storyboard1.png"),
      require("../img/SchoolProven/Storyboards/Storyboard2.png"),
      require("../img/SchoolProven/Storyboards/Storyboard3.png"),
    ])
  );

  const lowFidelityPrototypes = renderSection("Low Fidelity Prototypes",
    <>
      <h3>Paper Prototype 1</h3>
      {renderCarousel([
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype1/1.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype1/2.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype1/3.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype1/4.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype1/5.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype1/6.png"),
      ])}
      <h3>Paper Prototype 2</h3>
      {renderCarousel([
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/1.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/2.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/3.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/4.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/5.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/6.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/7.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/8.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/9.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/10.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/11.png"),
        require("../img/SchoolProven/LowFidelityPrototypes/PaperPrototype2/12.png"),
      ])}
    </>
  );

  const userTesting = renderSection(
    "User Testing",
    <>
      <p>
        We conducted two rounds of user testing. The first round consisted of
        heuristic evaluations of the two paper prototypes. The second round
        comprised of testing the higher-fidelity web-based prototype.
      </p>
      <p>
        For the heuristic evaluations, we had a total of three user tests and
        simply allowed each user to go through the different flows while we took
        note of every problem they faced. In the end, we came up with the
        following list of changes to make:
      </p>
      <ol>
        <li>
          Get rid of thumbs up/down in favor of helpful/not helpful & other tags
          <ul>
            <li>
              We should follow the heuristic of Consistency & Standards and keep
              thumbs up/down for reviews of class/professor only and helpful/not
              helpful for answers & reviewers
            </li>
          </ul>
        </li>
        <li>
          Add a breakdown of how many people gave certain review ratings (ex. 10
          people gave 5 stars, 6 people gave 4 stars, etc.)
          <ul>
            <li>
              Our evaluators wanted to see the breakdown so they could get the
              whole picture since an average rating might not be enough
            </li>
          </ul>
        </li>
        <li>
          Add more info to reviews (reason for taking class, letter grade or
          p/np, etc…)
          <ul>
            <li>
              Our evaluators noted that having this information be required
              would make it easier to get better context of the reviewer as well
              as to determine their trustworthiness
            </li>
          </ul>
        </li>
        <li>
          Allow option of posting grades as below/at/above average
          <ul>
            <li>
              Our evaluators informed us that grades can be a pretty sensitive
              topic so allowing the option to be more anonymous could lead to
              users being less hesitant to review
            </li>
          </ul>
        </li>
        <li>
          Keep locations of back buttons consistent
          <ul>
            <li>
              Having the back buttons in a consistent location would make the
              flows more efficient
            </li>
          </ul>
        </li>
        <li>
          Reduce the number of pop ups
          <ul>
            <li>
              Having multiple layers of popups could overwhelm the user and
              increase friction in the flows
            </li>
          </ul>
        </li>
      </ol>
      <p>
        We included these changes in our higher-fidelity web-based prototype and
        conducted a second round of user testing. We facilitated another three
        users through a set of more detailed tasks and questions. We discovered
        some general patterns:
      </p>
      <ul>
        <li>
          Common behavior includes users being able to easily navigate and use
          the app. Most users noted how simple the app is, which allowed them to
          easily find and use different functions.
        </li>
        <li>
          We also noticed that most users had trouble distinguishing between who
          wrote which comment in review threads. They were also unsure where
          they were at times after performing certain tasks. Most said this was
          due to the lack of borders and feedback, respectively.
        </li>
        <li>
          Another common behavior we noticed was that users spent little time
          digesting information that was presented to them, whether it was the
          review writing options or profile information. What we heard was that
          there was not a lot of motivation to do so.
        </li>
      </ul>
      <p>
        We updated the design of the Review and Q&A threads to make it clearer
        who was replying to who. Additionally, we performed an A/B with a new
        design on the Profile page to provide more motivation for users to visit
        and interact with different user profiles. We called this feature
        “Endorsements,” where users could endorse another user as being
        “helpful” or “friendly.” We hypothesized that this would increase
        interaction with the profile page, incentive users to read more reviews
        more carefully, and also add another metric for users to gauge how
        trustworthy or helpful a review is.
      </p>
    </>
  );

  const alternateDesigns = renderSection(
    "Alternate Designs",
    <>
      <p>
        We approached testing out alternate designs early on in the process
        through the paper prototypes. For the first design (Paper Prototype #1),
        we laid out the class page by placing the class info on top, a tab menu
        to switch between Reviews and Q&A, and the relevant content (reviews or
        questions) below. For the second design (Paper Prototype #2), the class
        page was laid out in a similar manner with some slight changes; there
        was a box containing statistics about the class (average grade, percent
        recommending class, etc.) below the class information and the Q&A
        section would be a separate page/component rather than being combined
        with Reviews. Additionally, there were slight differences in how the
        reviews were displayed. For the first design, we tried a three-tier
        rating with “thumbs up”, “neutral”, and “thumbs down.” For the second
        design, we used a traditional five-star rating. For the first design, we
        had tags that displayed whether users found the review to be “helpful,”
        “critical,” etc. We also focused more on the rating of the review in the
        first design whereas we had more focus on the reviewer (displaying
        major, year, etc.) in the second design.
      </p>
      <p>
        Based on user testing, we ended up combining the best aspects of both
        designs into our next iteration. We received feedback that the “thumbs
        up”, “neutral”, and “thumbs down” system for rating reviews was slightly
        confusing as we used a similar “thumbs up” and “thumbs down” system for
        rating comments and answers to questions. Users wanted a more clear
        distinction between the different actions, and also preferred the
        granularity of the five-star method. Users enjoyed being able to quickly
        see the class stats at a glance so we kept the class stats box. Users
        also valued being able to quickly see what major and year the reviewer
        was to be able to determine which reviews might be more relevant to
        them. Finally, users appreciated having a combined Reviews and Q&A page
        so that they can have all the information on a class in one place.
      </p>
      <Row>
        <Col>
          <Image
            src={require("../img/SchoolProven/AlternateDesigns/AlternateDesign1.png")}
            fluid
            rounded
          />
        </Col>
        <Col>
          <Image
            src={require("../img/SchoolProven/AlternateDesigns/AlternateDesign2.png")}
            fluid
            rounded
          />
        </Col>
      </Row>
    </>
  );

  const highFidelityPrototypes = renderSection(
    "High Fidelity Prototypes",
    renderCarousel([
      require("../img/SchoolProven/HighFidelityPrototypes/Wireframe1.png"),
      require("../img/SchoolProven/HighFidelityPrototypes/Wireframe2.png"),
      require("../img/SchoolProven/HighFidelityPrototypes/Wireframe3.png"),
      require("../img/SchoolProven/HighFidelityPrototypes/Wireframe4.png"),
    ])
  );

  return (
    <Container>
      <GlobalNav />
      <h1>SchoolProven</h1>
      {/* <Image src={require("../img/SchoolProven/SchoolProven-Slide.png")} fluid /> */}
      <br />
      <br />
      <br />
      {background}
      <br />
      {overview}
      <br />
      {problemStatement}
      <br />
      {userPersonas}
      <br />
      {competitiveAudit}
      <br />
      <br />
      <br />
      {storyboards}
      <br />
      {lowFidelityPrototypes}
      <br />
      {userTesting}
      <br />
      {alternateDesigns}
      <br />
      {highFidelityPrototypes}
    </Container>
  );
}

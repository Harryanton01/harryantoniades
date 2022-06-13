import logo from "./logo.jpg";
import {
  AppContainer,
  Image,
  MainSectionCenter,
  MainSection,
  MainText,
  SecondaryText,
  Nav,
  List,
  Anchor,
  StyledLink,
  Paragraph,
} from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const cvLink =
  "https://firebasestorage.googleapis.com/v0/b/harryantoniades-240c5.appspot.com/o/Harry_Antoniades.pdf?alt=media&token=63bdc431-e072-42ee-91f1-07aad52986d5";

const gitHubLink = "https://github.com/Harryanton01";

const NavBar = () => {
  return (
    <Nav>
      <List>
        <StyledLink to="/">Home</StyledLink>
        <Anchor href={gitHubLink} target="_blank">
          Code
        </Anchor>
        <Anchor href={cvLink} target="_blank">
          CV/Resume
        </Anchor>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/about-me">About Me</StyledLink>
      </List>
    </Nav>
  );
};
const AboutMe = () => {
  return (
    <AppContainer>
      <MainSection>
        <Paragraph>
          I am extremely excited to journey into the world of Frontend
          Development, and my goal is become a highly dependable, and vastly
          skilled developer in the future.
        </Paragraph>
        <Paragraph>
          I am a previous Computer Science graduate with a lot of hunger to
          pursue JavaScript development, and have dedicated alot of time to
          self-training in technologies such as React, JavaScript and HTML/CSS.
        </Paragraph>
        <Paragraph>
          This has translated into 6 months of commercial experience working
          with JavaScript, specifically developing Salesforce Lightning Web
          Components. I also worked with some React components.
        </Paragraph>
        <Paragraph>
          Beyond this, I've completed multiple personal projects, whilst
          learning to utilise an array of technologies (React, JavaScript,
          TypeScript, HTML, CSS).
        </Paragraph>
        <Paragraph>
          I've detailed all my projects/experience in my{" "}
          <a href={cvLink} target="_blank" rel="noreferrer">
            <strong>CV</strong>
          </a>
          , so please do freel free to check it out. Also, you're more than
          welcome to find them on my{" "}
          <a href={gitHubLink} target="_blank" rel="noreferrer">
            <strong>GitHub</strong>
          </a>
          .
        </Paragraph>
        <Paragraph>Let's talk soon!</Paragraph>
      </MainSection>
    </AppContainer>
  );
};

const Projects = () => {
  return (
    <AppContainer>
      <MainSection>
        <Paragraph>
          I've listed below some examples of real-life solutions I've created
          for acquaintances, friends and family as well as work.
        </Paragraph>
        <Paragraph>
          <h2>
            <a
              href="https://helenmichael.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              helenmichael.co.uk (2018 - Present)
            </a>
          </h2>
          My beloved aunt Helen Michael always had a passion for art, and she
          wanted a platform to share it with the world. I created this website
          for that purpose. It's built in <strong>Angular</strong>, and I have
          to admit that it didn't need to necessarily be an SPA because it
          doesn't have much interactivity, however I did want to practice my
          skills at the time which was why I used that framework.
        </Paragraph>
        <Paragraph>
          <h2>
            <a
              href="https://agcharalampos.gr/"
              target="_blank"
              rel="noreferrer"
            >
              agcharalampos.gr (2020 - Present)
            </a>
          </h2>
          I undertook this project to help my parents' local Association of
          "Agios Charalampos", which is situated in Loutraki (Corinthias) in
          Greece. They needed an online presence at the time, and I was more
          than happy to get them set up with one. The website is an SPA built
          with <strong>React</strong>, and it mostly serves as a blog page where
          they post their regular updates. It also has more complex interactive
          functionality with several forms in place for people to reach out to
          them and sign up to the society. I've also added a "Weather Widget",
          which retreives weather information so that local residents can get up
          to date information. I used <strong>Google's Firebase</strong> as the
          backend, to host the site and to also trigger emails to the
          association when a signup form was requested. I still update this
          regularly when requested.
        </Paragraph>
        <Paragraph>
          <h2>
            <a
              href="https://gameanalytics.com/docs"
              target="_blank"
              rel="noreferrer"
            >
              gameanalytics.com/docs (2020 - Present)
            </a>
          </h2>
          I completed this project for work. At the time we needed a complete
          overhaul of our documentation, and it was all situated in Salesforce.
          As a result we decided to use <strong>Salesforce Sites</strong> to
          publish our docs. I had to create and customise several{" "}
          <strong>Lightning Web Components</strong>, using{" "}
          <strong>JavaScript</strong> for interactivity and{" "}
          <strong>SOQL</strong> to query for and retreive article data from the
          platform.
        </Paragraph>
      </MainSection>
    </AppContainer>
  );
};
const Home = () => {
  return (
    <AppContainer>
      <MainSectionCenter>
        <Image src={logo} alt="logo image" />
        <MainText>Hi &#128075;, I'm Harry</MainText>
        <br />
        <SecondaryText>
          Massive tech and games enthusiast. I love building interactive SPAs
          with React &#38; JavaScript and I'm extremely excited to venture into
          the world of Frontend Development.
        </SecondaryText>

        <SecondaryText>
          I also anjoy watching/playing football and gym.
        </SecondaryText>
      </MainSectionCenter>
    </AppContainer>
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about-me" caseSensitive={false} element={<AboutMe />} />
        <Route path="/projects" caseSensitive={false} element={<Projects />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
      <NavBar />
    </Router>
  );
};

export default App;

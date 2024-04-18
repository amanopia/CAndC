import Heading from "./components/Heading.jsx";
import Section from "./components/Section.jsx";

export default function App2() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello Traveller" body="Read about my adventures"></Post>
      <Section>
        <Heading>Posts</Heading>
        <RecentPosts></RecentPosts>
      </Section>
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!"></Post>
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"></Post>
    </Section>
  );
}

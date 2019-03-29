import React from 'react';
import { Title, Subtitle, Hr } from '../../components/elements';

export default class Skills extends React.Component {
  render() {
    return (
      <section>
        <Title>Aaron Hakala</Title>
        <Subtitle>Software engineer</Subtitle>
        <Hr />
        <p>Hey, I'm a frontend guy interested in everything tech.</p>
        <p>
          I love playing around with Javascript and I'm super interested in
          fresh Frontend related tech eg. GraphQL, ReasonML & WebAssembly. My
          current favourite frontend stack is React.js, styledcomponent &
          Apollo, but actively looking for better stuff.
        </p>
        <p>
          I have a background around UX Design. I studied digital communications
          in Metropolia and my studies were focused on Design. Designing usable
          software using different designing, prototyping & testing methods.
          Keywords: User-centered design, Human-centered design, usability,
          accessibility, paper prototyping, A-B testing, design of everyday
          things, don't make me think.
        </p>
        <p>
          I wrote my thesis on web accessibility in single page applications,
          due to the increasing demand in creating accessible user-interfaces.
        </p>
        <p>
          In my free time I play around with raspberry pi:s trying to setup
          lightweight web services. Trying to learn docker, programming C, and
          some DevOps stuff to increase my productivity.
        </p>
      </section>
    );
  }
}

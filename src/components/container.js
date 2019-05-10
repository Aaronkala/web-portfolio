import styled from 'styled-components';

export default styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');
  max-width: 800px;
  margin: 0 auto;
  display: block;
  @media (${p => p.theme.mediaQueries.lg}) {
    max-width: 1200px;
  }
`;

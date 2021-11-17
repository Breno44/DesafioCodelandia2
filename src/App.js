import { Theme } from "./theme/Theme";
import { Container, HeaderTitle, Banner, Title, Text, Main, TitleMain, SubtitleMain, Shoes, Image } from "./appStyles";
import { Jordans } from "./Shoes";

export function App() {
  return (
    <Theme>
      <Container>
        <HeaderTitle>JordanShoes</HeaderTitle>
        <Banner>
          <Title>A melhor loja de Jordan</Title>
          <Text>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</Text>
        </Banner>
        <Main>
          <TitleMain>Destaques</TitleMain>
          <SubtitleMain>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </SubtitleMain>
          <Shoes>
            {Jordans.map((item) => (
              <Image src={item.url} />
            ))}
          </Shoes>
        </Main>
      </Container>
    </Theme>
  );
}

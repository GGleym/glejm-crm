import {Styled} from './styled';

type Scoring = {
  /** Фаза */
  phase: string;
  /** Название фазы */
  much: number;
};

export type CardProps = {
  /** Название продукта */
  productName: string;
  /** ФИО клиента */
  clientFio: string;
  /** Маркеры клиента */
  tags: string[];
  /** Скоринг по заявке */
  scoring: Scoring;
};

export const Card = ({productName, clientFio, tags, scoring}: CardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.PersonalData>
        <Styled.ProductName>{productName}</Styled.ProductName>
        <Styled.LinkByTags>
          <Styled.Link href="#">{clientFio}</Styled.Link>
        </Styled.LinkByTags>
      </Styled.PersonalData>
      <Styled.Scoring>
        <Styled.Linear>
          <Styled.Gradient $size={scoring.much} />
        </Styled.Linear>
        <Styled.HelperText>{scoring.phase}</Styled.HelperText>
      </Styled.Scoring>
    </Styled.Wrapper>
  );
};

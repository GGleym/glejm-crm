import {Container} from '../../entities/widget/ui/container';
import {Styled} from './styled';
import {Card} from './ui/card';

const LIST = [
  {
    productName: 'MIR Supreme',
    clientFio: 'Галимкина Ирина Сергеевна',
    tags: ['influencer'],
    scoring: {
      phase: 'Доставка',
      much: 65,
    },
  },
  {
    productName: 'Ипотека',
    clientFio: 'Бабкина Алина Андреевна',
    tags: ['vip'],
    scoring: {
      phase: 'Проверка СЭБ',
      much: 20,
    },
  },
  {
    productName: 'Рефинансирование',
    clientFio: 'Давыдова Екатерина Сергеевна',
    tags: ['salary'],
    scoring: {
      phase: 'Подготовка документов',
      much: 40,
    },
  },
  {
    productName: 'Эквайринг',
    clientFio: 'Дао Павел Туанович',
    tags: [],
    scoring: {
      phase: 'Проверка СЭБ',
      much: 10,
    },
  },
  {
    productName: 'Кредит',
    clientFio: 'Галимкина Ирина Сергеевна',
    tags: [],
    scoring: {
      phase: 'Подготовка документов',
      much: 15,
    },
  },
];

export const ListApplicationWidget = () => {
  return (
    <Container title="Заявки" count={0} hasMore variant="grey">
      <Styled.Wrapper>
        {LIST.map((application) => (
          <Card key={application.productName} {...application} />
        ))}
      </Styled.Wrapper>
    </Container>
  );
};

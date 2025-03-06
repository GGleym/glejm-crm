import {Styled} from './styled';
import {Card} from './ui/card';

const CLIENTS = [
  {
    fullName: 'Абакумова Екатерина Николаевна',
    contacts: ['email', 'chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Абрамов Евгений Игоревич',
    contacts: ['chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Бабкина Алина Андреевна',
    contacts: ['chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Вабуата Лео Шалвовович',
    contacts: ['chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Галимкина Ирина Сергеевна',
    contacts: ['chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Дао Павел Туанович',
    contacts: ['chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Давыдова Екатерина Сергеевна',
    contacts: ['chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Демидов Дормидонт Павлович',
    contacts: ['chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Демидова Ирина Павловна',
    contacts: ['chat', 'tg', 'telephony'],
  },
  {
    fullName: 'Евграфов Денис Викторович',
    contacts: ['chat', 'tg', 'telephony'],
  },
] as const;

const getUniqueLetters = (clients: {fullName: string}[]) => {
  const uniqueLetters = new Set<string>();

  clients.forEach(({fullName}) => {
    const firstLetter = fullName[0];
    uniqueLetters.add(firstLetter);
  });

  return Array.from(uniqueLetters).sort();
};

export const ClientsWidget = () => {
  return (
    <div>
      <Styled.Header>
        <Styled.Heading>клиенты</Styled.Heading>
        <Styled.Counter>123</Styled.Counter>
      </Styled.Header>

      <Styled.List>
        {CLIENTS.map((client) => (
          <Card {...client} onToClient={() => {}} />
        ))}
      </Styled.List>
    </div>
  );
};

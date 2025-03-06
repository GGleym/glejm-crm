import {Container} from '../../entities/widget/ui/container';

export const ListAppealWidget = () => {
  return (
    <Container title="Заявки" count={0} hasMore variant="grey">
      {LIST.map((application) => (
        <Card key={application.productName} {...application} />
      ))}
    </Container>
  );
};

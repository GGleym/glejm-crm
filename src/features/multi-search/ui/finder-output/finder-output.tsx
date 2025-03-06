import {SearchStrategy} from '../search-strategy';

import {Styled} from './styled';

export const FinderOutput = () => {
  return (
    <>
      <SearchStrategy />
      <Styled.List role="list">
        {/* {suggestions.length ? (
            suggestions?.map((el) => (
              <Cell key={el.value} value={el} label={el.data.inn} onClick={() => handleChange(el)} />
            ))
          ) : (
            <Flex alignItems="center" justify="center" p="10px">
              <Text font="p3RegularComp">Ничего не найдено</Text>
            </Flex>
          )} */}
      </Styled.List>
    </>
  );
};

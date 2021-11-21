import { WordFound } from "./WordFound";
import { WordNotFoud } from "./WordNotFoud";
export const WordSearchResult = (props) => {
  return (
    <div>
      {props.searchResult ? (
        <WordFound position={props.position} />
      ) : (
        <WordNotFoud word={props.word} add={props.add} />
      )}
    </div>
  );
};

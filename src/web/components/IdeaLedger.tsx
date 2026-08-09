import { Link } from 'react-router-dom';

import type { IdeaSearchResult } from '../types';
import { CompareToggle } from './CompareToggle';
import { FitLabel, StatusLabel } from './StatusLabels';

const matchFieldLabels = {
  name: 'name',
  alias: 'alias',
  tag: 'tag',
  thesis: 'promise',
  decision: 'decision reason',
  resurrection: 'resurrection condition',
  researchTitle: 'mapped dossier title',
  researchHeading: 'mapped dossier heading',
  researchBody: 'mapped dossier body',
} as const;

function HighlightedMatch({ matchedText, text }: { matchedText: string; text: string }) {
  const index = matchedText
    ? text.toLocaleLowerCase().indexOf(matchedText.toLocaleLowerCase())
    : -1;
  if (index < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <mark>{text.slice(index, index + matchedText.length)}</mark>
      {text.slice(index + matchedText.length)}
    </>
  );
}

function SourceLabel({ result }: { result: IdeaSearchResult }) {
  const { idea } = result;
  if (!idea.dossierSlugs.length) return <span className="source-empty">No linked research</span>;
  const label = idea.dossierSlugs[0].replace(/^idea-mining-loop-/, '').replace(/-/g, ' ');
  return <span className="source-label">{label}</span>;
}

export function IdeaLedger({ results }: { results: IdeaSearchResult[] }) {
  return (
    <div className="ledger-table-wrap">
      <table className="ledger-table">
        <caption className="sr-only">Idea decisions and research status</caption>
        <thead>
          <tr>
            <th className="compare-column" scope="col">Compare</th>
            <th scope="col">Idea</th>
            <th scope="col">Promise</th>
            <th scope="col">Current decision</th>
            <th scope="col">Fit and tags</th>
            <th scope="col">Research</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            const { idea } = result;
            return (
              <tr data-idea-id={idea.id} key={idea.id}>
                <td className="compare-cell" data-label="Compare">
                  <CompareToggle compact id={idea.id} name={idea.name} />
                </td>
                <td className="idea-cell" data-label="Idea">
                  <StatusLabel status={idea.status} />
                  <Link className="idea-name" to={idea.route}>{idea.name}</Link>
                  {idea.aliases.length ? <span className="idea-aliases">{idea.aliases.slice(0, 2).join(' · ')}</span> : null}
                </td>
                <td className="thesis-cell" data-label="Promise">{idea.one_liner}</td>
                <td className="decision-cell" data-label="Current decision">
                  <span className="decision-copy">{idea.decision_reason}</span>
                  {result.snippet ? (
                    <div className="search-explanation">
                      <span>Matched in {matchFieldLabels[result.snippet.field]}</span>
                      <p>
                        <HighlightedMatch
                          matchedText={result.snippet.matchedText}
                          text={result.snippet.text}
                        />
                      </p>
                    </div>
                  ) : null}
                </td>
                <td className="fit-tags-cell" data-label="Fit and tags">
                  <FitLabel fit={idea.hackathon_fit} />
                  <span className="row-tags">{idea.tags.slice(0, 3).join(' · ')}</span>
                </td>
                <td className="source-cell" data-label="Research"><SourceLabel result={result} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

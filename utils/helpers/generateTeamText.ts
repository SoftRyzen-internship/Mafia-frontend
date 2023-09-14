export function generateTeamText(playersInTeam: number): string {
  let ending;

  if (playersInTeam % 10 === 1 && playersInTeam % 100 !== 11) {
    ending = 'оба';
  } else if (
    [2, 3, 4].includes(playersInTeam % 10) &&
    ![12, 13, 14].includes(playersInTeam % 100)
  ) {
    ending = 'оби';
  } else {
    ending = 'іб';
  }

  return `${playersInTeam} ос${ending} у команді`;
}

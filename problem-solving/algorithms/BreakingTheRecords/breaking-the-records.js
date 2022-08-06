/**
 * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
 * She tabulates the number of times she breaks her season record for most points and least points in a game.
 * Points scored in the first game establish her record for the season, and she begins counting from there.
 */

const breakingRecords = (scores) => {
  let highest = scores[0];
  let lowest = scores[0];
  let highestCount = 0;
  let lowestCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
      highestCount++;
    }
    if (scores[i] < lowest) {
      lowest = scores[i];
      lowestCount++;
    }
  }

  return [highestCount, lowestCount];
};
'use server';

function calcAnalytics() {
  const pointsWindows = getPointsWindows();
  const pointsLinux = getPointsLinux();
  const pointsMacos = getPointsMacOS();

  const totalPoints = pointsWindows + pointsLinux + pointsMacos;
  const safeTotalPoints = totalPoints > 0 ? totalPoints : 1;

  const percentWindows = (pointsWindows / safeTotalPoints) * 100;
  const percentLinux = (pointsLinux / safeTotalPoints) * 100;
  const percentMacos = (pointsMacos / safeTotalPoints) * 100;

  savePercentToDatabase('Windows', percentWindows);
  savePercentToDatabase('Linux', percentLinux);
  savePercentToDatabase('MacOS', percentMacos);
}

function getPointsWindows() {
  return 25;
}

function getPointsLinux() {
  return 50;
}

function getPointsMacOS() {
  return 25;
}

function savePercentToDatabase(os: string, percent: number) {
  // Datenbank access logic hier?
}

function getPercentFromDatabase(os: string): number {
  //datenbank access logic hier?
  return 25;
}

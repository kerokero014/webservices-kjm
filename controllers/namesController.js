const personOneR = (req, res) => {
  res.send(" Ana Karina");
};

const personTwoR = (req, res) => {
  res.send(" Saul Israel");
};

const personThreeR = (req, res) => {
  res.send(" Claudia Mendoza");
};

module.exports = { personOneR, personTwoR, personThreeR };

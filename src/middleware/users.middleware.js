const validateUserRange = (req, res, next) => {
  const range = req.params.range;
  if (range !== 'young' && range !== 'adult' && range !== 'senior') {
    return res.send("Rango de edad no válido");
  }
  next();
}

const validateUserCreation = (req, res, next) => {
  const userData = JSON.parse(req.body);
  if (!userData.name || !userData.age || !userData.email) {
    return res.send("Datos de usuario incompletos");
  }
  next();
}

export default {
  validateUserRange,
  validateUserCreation
}
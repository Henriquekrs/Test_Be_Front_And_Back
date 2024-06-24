import { RequestHandler } from 'express';

const validateInputs: RequestHandler = (req, res, next) => {
  const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexPassword =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]).{6,}$/;
  const errorMessage = 'Invalid email or password';

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'All fields must be filled' });
    return;
  }
  if (!regex.test(email)) {
    res.status(401).json({ message: errorMessage });
    return;
  }
  if (!regexPassword.test(password)) {
    res.status(401).json({ message: errorMessage });
    return;
  }
  next();
};

export default validateInputs;

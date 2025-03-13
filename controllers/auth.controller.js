import {authenticateUser, resetUserPassword} from '../services/auth.services.js'

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await authenticateUser(username, password);
    req.session.userId = user.id;
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Could not log out, please try again' });
    }
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logout successful' });
  });
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    await resetUserPassword(email, newPassword);
    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
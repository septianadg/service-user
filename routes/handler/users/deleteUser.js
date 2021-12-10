const {
    User,
    RefreshToken
  } = require('../../../models');
  
  module.exports = async (req, res) => {
    const id = req.body.id;
    const user = await User.findByPk(id);
  
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found'
      });
    }

    await RefreshToken.destroy({
      where: { user_id: id }
    });
  
    await User.destroy({
      where: { id: id }
    });
  
    return res.json({
      status: 'success',
      message: 'user deleted'
    });
  }
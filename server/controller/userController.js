const userController = (router, service) => {
  const userService = service;

  //  Create User
  router.post('/register', async (req, res, next) => {
    const userPayload = req.body;

    let user = null;

    try {
      user = await userService.createUser(userPayload);
      console.log('Created User Successfully!');
    } catch (error) {
      console.log(error);
    }

    res.data = user;

    next();
  });
};

module.exports = userController;

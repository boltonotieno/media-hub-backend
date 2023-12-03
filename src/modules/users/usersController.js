import ResponseHandler from "../../helpers/ResponseHandler";
import UserHelper from "../../helpers/UserHelper";

class UsersController {
  static mainFunction(req, res) {
    return res.status(200).json({
      success: true,
      message: "Hello World",
    });
  }

  static async userLogin(req, res) {
    const { user } = req;
    try {
      const token = UserHelper.generateToken(user);
      const data = {
        token,
      };
      return ResponseHandler.handleSuccess("Login successful", data, 200, res);
    } catch (error) {
      return ResponseHandler.handleError("Server Error", 500, res);
    }
  }
}
export default UsersController;

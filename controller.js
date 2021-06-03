const User = require('./validation');
require('./db')

module.exports = {

    /**
     * Function to add user
     * @param ctx(name, email)
     * Created By: Nitesh Bisht
     * Created At: 12,Mar 2021
     */
    async addUser(ctx) {
        try {
            var body = ctx.request.body;
            var user = new User();
            user.name = body.name;
            user.email = body.email;
            user.save();
            ctx.body = { status: 200, message: "data save ", user: user }
        }
        catch (error) {
            ctx.throw(error)
        }
    },

    /**
     * Function to read all user
     * @param ctx(name, email)
     * Created By: Nitesh Bisht
     * Created At: 12,Mar 2021
     */   
    async readUser(ctx) {
        try {
            var usersData = await User.find()
            console.log(usersData)
            ctx.body = { usersData }
        }
        catch (error) {
            ctx.throw(error)
        }
    },

     /**
     * Function to update 
     * @param ctx(name, email)
     * Created By: Nitesh Bisht
     * Created At: 12,Mar 2021
     */   
    async updateUser(ctx) {
        try {
            var _id = ctx.request.params.id;

            var updateUser = await User.findByIdAndUpdate(_id, ctx.request.body)
            ctx.body = { updateUser }
        }
        catch (error) {
            ctx.throw(error)
        }
    },

    /**
     * Function to read by id
     * @param ctx(name, email)
     * Created By: Nitesh Bisht
     * Created At: 12,Mar 2021
     */
    async getUser(ctx) {

        try {
            const _id = ctx.request.params.id;
            const userData = await User.findById(_id);
            console.log(userData);
            if (!userData) {
                return ctx.body;
            }
            else {
                ctx.body = { userData };
            }
        }
        catch (error) {
            ctx.throw(error);
        }
    }
}